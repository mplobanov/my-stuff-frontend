import {gql} from "@apollo/client";

export const editGroupQuery = gql`
    mutation EditGroup($input: GroupMutationInput!) {
        editGroup(input: $input) {
            group {
                id
                name
            }
        }
    }
`;