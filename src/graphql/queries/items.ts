import {gql} from "@apollo/client";

export const itemsQuery = gql`
    query Items {
        currentUser {
            id
            stuffGroups {
                edges {
                    node {
                        id
                        name
                        items {
                            edges {
                                node {
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
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;