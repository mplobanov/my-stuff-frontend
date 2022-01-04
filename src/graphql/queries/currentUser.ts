import {gql} from "@apollo/client";

export const curUserQuery = gql`
    query CurrentUser {
        currentUser {
            id
            username
            firstName
            lastName
            __typename
        }
        __typename
    }
`;