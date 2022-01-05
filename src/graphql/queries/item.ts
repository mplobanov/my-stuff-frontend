import {gql} from "@apollo/client";

export const itemQuery = gql`
    query Item($id: ID!) {
        item(id: $id) {
            id
            name
            brand
            color
            size
            volume
            status {
                id
                name
            }
            location {
                id
                name
            }
            group {
                id
                name
            }
        }
    }
`;