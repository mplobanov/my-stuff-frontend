import {QueryHookOptions, QueryResult, useMutation, useQuery} from "@apollo/client";
import {Groups} from "../graphql/queries/__generated__/Groups";
import {groupsQuery} from "../graphql/queries/groups";
import {useMemo} from "react";
import {Suggestion} from "../components/logic/Suggest/Suggest";
import {ForeignEntity} from "./useItems";
import {EditGroup, EditGroupVariables} from "../graphql/mutations/__generated__/EditGroup";
import {editGroupQuery} from "../graphql/mutations/EditGroup";

export const useGroupsRaw = (options?: QueryHookOptions<Groups>) => useQuery<Groups>(groupsQuery, options) as QueryResult<Groups>;

export const useGroupSuggestions = () => {
    const {data: groups, error} = useGroupsRaw();

    const groupSuggs = useMemo(() => {
        if (groups) {
            return groups.currentUser?.stuffGroups.edges.map(group => {return {
                id: group?.node?.id,
                name: group?.node?.name,
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
    }, [error, groups]);

    return groupSuggs as Suggestion[] | undefined;
};

export const useGroupMutate = () => {
    const [mutateGroup, helpers] = useMutation<EditGroup, EditGroupVariables>(editGroupQuery, {
        refetchQueries: ['Groups', 'Items']
    });

    const saveGroup = (entity: ForeignEntity) => {
        return mutateGroup({
            variables: {
                input: {
                    name: entity.name,
                    clientMutationId: entity.id ? entity.id : undefined,
                }
            }
        });
    }

    return {saveGroup, helpers};
};

export type FEMutateHook = () => {mutate: (entity: Suggestion) => Promise<Suggestion>, loading?: boolean};

export const useGroupFEMutate: FEMutateHook = () => {
    const {saveGroup: mutate, helpers} = useGroupMutate();

    return {
        mutate: async (entity: ForeignEntity) => {
            const res = await mutate(entity);
            return {
                id: res.data?.editGroup?.group?.id ?? '',
                name: res.data?.editGroup?.group?.name ?? '',
            } as Suggestion;
        },
        loading: helpers.loading
    }
}