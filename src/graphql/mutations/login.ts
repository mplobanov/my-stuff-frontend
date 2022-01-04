import {gql} from "@apollo/client";

export const loginUserQuery = gql`
    mutation Login($login: String!, $password: String!){
        tokenAuth(username: $login, password: $password) {
            token
            payload
            refreshExpiresIn
        }
    }`;