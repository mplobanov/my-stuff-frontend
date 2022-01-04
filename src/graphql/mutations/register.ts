import {gql} from "@apollo/client";

export const registerQuery = gql`
    mutation Register($firstName: String!, $login: String!, $password: String!) {
        register(firstName: $firstName, login: $login, password: $password) {
            currentUser {
                username
            }
        }
    }
`;