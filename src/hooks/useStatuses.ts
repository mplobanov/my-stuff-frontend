import {QueryHookOptions, useMutation, useQuery} from "@apollo/client";
import {statusesQuery} from "../graphql/queries/statuses";
import {Statuses} from "../graphql/queries/__generated__/Statuses";
import {useMemo} from "react";
import {Suggestion} from "../components/Suggest/Suggest";
import {EditStatus, EditStatusVariables} from "../graphql/mutations/__generated__/EditStatus";
import {editStatusQuery} from "../graphql/mutations/EditStatus";
import {ForeignEntity} from "./useItems";
import {FEMutateHook} from "./useGroups";

export const useStatusesRaw = (options?: QueryHookOptions) => useQuery<Statuses>(statusesQuery, options);

export const useStatusSuggestions = () => {
    const {data: statuses, error} = useStatusesRaw();

    const statusSuggs = useMemo(() => {
        if (statuses) {
            return statuses.currentUser?.statuses.edges.map(status => {return {
                id: status?.node?.id,
                name: status?.node?.name,
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
    }, [error, statuses]);

    return statusSuggs as Suggestion[] | undefined;
};

export const useStatusMutate = () => {
    const [mutateStatus, helpers] = useMutation<EditStatus, EditStatusVariables>(editStatusQuery, {
        refetchQueries: ['Statuses', 'Items']
    });

    const saveStatus = (entity: ForeignEntity) => {
        return mutateStatus({
            variables: {
                input: {
                    name: entity.name,
                    clientMutationId: entity.id ? entity.id : undefined,
                }
            }
        });
    }

    return {saveStatus, helpers};
};

export const useStatusFEMutate: FEMutateHook = () => {
    const {saveStatus: mutate, helpers} = useStatusMutate();

    return {
        mutate: async (entity: ForeignEntity) => {
            const res = await mutate(entity);
            return {
                id: res.data?.editStatus?.status?.id ?? '',
                name: res.data?.editStatus?.status?.name ?? '',
            } as Suggestion;
        },
        loading: helpers.loading
    }
}