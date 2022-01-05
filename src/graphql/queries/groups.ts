import {gql} from "@apollo/client";

export const groupsQuery = gql`
    query Groups {
        currentUser {
            id
            stuffGroups {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
    }
`;