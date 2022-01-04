import {QueryHookOptions, QueryResult, useQuery} from "@apollo/client";
import {locationsQuery} from "../graphql/queries/locations";
import {Locations} from "../graphql/queries/__generated__/Locations";
import {useMemo} from "react";
import {Suggestion} from "../components/Suggest/Suggest";

export const useLocations = (options?: QueryHookOptions) => useQuery<Locations>(locationsQuery, options) as QueryResult<Locations>;

export const useLocationSuggestions = () => {
    const {data: locations} = useLocations();

    const locSuggs = useMemo(() => {
        if (locations) {
            return locations.currentUser?.locations.edges.map(loc => {return {
                id: loc?.node?.id,
                name: loc?.node?.name,
            } as Suggestion});
        }
        return undefined;
    }, [locations]);

    return locSuggs as Suggestion[] | undefined;
};