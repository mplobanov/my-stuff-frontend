import {gql} from "@apollo/client";

export const editStatusQuery = gql`
    mutation EditStatus($input: StatusMutationInput!){
        editStatus(input: $input) {
            status {
                id
                name
            }
        }
    }
`;