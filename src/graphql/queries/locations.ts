import {gql} from "@apollo/client";

export const locationsQuery = gql`
    query Locations {
        currentUser {
            id
            locations {
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