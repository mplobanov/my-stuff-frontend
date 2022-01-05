import {QueryHookOptions, QueryResult, useMutation, useQuery} from "@apollo/client";
import {locationsQuery} from "../graphql/queries/locations";
import {Locations} from "../graphql/queries/__generated__/Locations";
import {useMemo} from "react";
import {Suggestion} from "../components/Suggest/Suggest";
import {editLocationQuery} from "../graphql/mutations/EditLocation";
import {EditLocation, EditLocationVariables} from "../graphql/mutations/__generated__/EditLocation";
import {ForeignEntity} from "./useItems";
import {FEMutateHook} from "./useGroups";

export const useLocationsRaw = (options?: QueryHookOptions) => useQuery<Locations>(locationsQuery, options) as QueryResult<Locations>;

export const useLocationSuggestions = () => {
    const {data: locations, error} = useLocationsRaw();

    const locSuggs = useMemo(() => {
        if (locations) {
            return locations.currentUser?.locations.edges.map(loc => {return {
                id: loc?.node?.id,
                name: loc?.node?.name,
            } as Suggestion});
        }
        if (error) {
            return [
                {
                    name: error.message,
                    id: "",
                }
            ]
        }
        return undefined;
    }, [error, locations]);

    return locSuggs as Suggestion[] | undefined;
};

export const useLocationMutate = () => {
    const [mutateLocation, helpers] = useMutation<EditLocation, EditLocationVariables>(editLocationQuery, {
        refetchQueries: ['Locations', 'Items']
    });

    const saveLocation = (entity: ForeignEntity) => {
        return mutateLocation({
            variables: {
                input: {
                    name: entity.name,
                    clientMutationId: entity.id ? entity.id : undefined,
                }
            }
        });
    }

    return {saveLocation, helpers};
};

export const useLocationFEMutate: FEMutateHook = () => {
    const {saveLocation: mutate, helpers} = useLocationMutate();

    return {
        mutate: async (entity: ForeignEntity) => {
            const res = await mutate(entity);
            return {
                id: res.data?.editLocation?.location?.id ?? '',
                name: res.data?.editLocation?.location?.name ?? '',
            } as Suggestion;
        },
        loading: helpers.loading
    }
}