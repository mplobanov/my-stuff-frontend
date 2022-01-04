import {QueryHookOptions, QueryResult, useQuery} from "@apollo/client";
import {Items} from "../graphql/queries/__generated__/Items";
import {itemsQuery} from "../graphql/queries/items";
import {Item, ItemVariables} from "../graphql/queries/__generated__/Item";
import {itemQuery} from "../graphql/queries/item";
import {ItemValues} from "../components/DetailsCard/DetailsCard";

export const useItems = (options?: QueryHookOptions<Items>) => useQuery<Items>(itemsQuery, options) as QueryResult<Items>;

export const useItem = (options?: QueryHookOptions<Item, ItemVariables>) => useQuery<Item, ItemVariables>(itemQuery, options) as QueryResult<Item>;

export const emptyItem: ItemValues = {
    title: "",

    status: {
        id: "",
        name: "",
    },
    location: {
        id: "",
        name: ""
    },
    group: {
        id: "",
        name: "",
    },

    brand: "",
    color: "",
    size: "",
    volume: "",
};