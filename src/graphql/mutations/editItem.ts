import {gql} from "@apollo/client";

export const editItemQuery = gql`
    mutation EditItem($input: ItemMutationInput!) {
        editItem(input: $input) {
            item {
                id
                name

                brand
                color
                size
                volume

                group {
                    id
                    name
                }
                location {
                    id
                    name
                }
                status {
                    id
                    name
                }
            }
        }
    }
`;