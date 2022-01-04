import {gql} from "@apollo/client";

export const statusesQuery = gql`
    query Statuses {
        currentUser {
            id
            statuses {
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