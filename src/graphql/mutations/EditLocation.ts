import {gql} from "@apollo/client";

export const editLocationQuery = gql`
    mutation EditLocation($input: LocationMutationInput!) {
        editLocation(input: $input) {
            location {
                id
                name
            }
        }
    }
`;