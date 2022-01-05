import {QueryHookOptions, QueryResult, useMutation, useQuery} from "@apollo/client";
import {Items} from "../graphql/queries/__generated__/Items";
import {itemsQuery} from "../graphql/queries/items";
import {Item, ItemVariables} from "../graphql/queries/__generated__/Item";
import {itemQuery} from "../graphql/queries/item";
import {useMemo} from "react";
import {EditItem, EditItemVariables} from "../graphql/mutations/__generated__/EditItem";
import {editItemQuery} from "../graphql/mutations/editItem";


export const useItemsRaw = (options?: QueryHookOptions<Items>) => useQuery<Items>(itemsQuery, options) as QueryResult<Items>;

export const useItemRaw = (options?: QueryHookOptions<Item, ItemVariables>) => useQuery<Item, ItemVariables>(itemQuery, options) as QueryResult<Item>;

export interface ForeignEntity {
    id: string,
    name: string,
}

export interface ItemValues {
    id: string,
    title: string,

    brand: string,
    color: string,
    size: string,
    volume: string,

    location: ForeignEntity,
    status: ForeignEntity,
    group: ForeignEntity,
}

export const useItem = (itemID?: string) => {
    const {data: itemRaw, loading, error} = useItemRaw({
        variables: {
            id: itemID ?? '',
        }
    });

    const itemValues = useMemo(() => {
        if (itemRaw) {
            return {
                id: itemRaw.item?.id ?? '',
                title: itemRaw.item?.name ?? '',

                status: itemRaw.item?.status as ForeignEntity ?? emptyForeignEntity,
                location: itemRaw.item?.location as ForeignEntity ?? emptyForeignEntity,
                group: itemRaw.item?.group as ForeignEntity ?? emptyForeignEntity,

                brand: itemRaw.item?.brand ?? '',
                color: itemRaw.item?.color ?? '',
                size: itemRaw.item?.size ?? '',
                volume: itemRaw.item?.volume ?? '',
            } as ItemValues;
        }
        return emptyItem;
    }, [itemRaw]);

    return {itemValues, loading, error};
}

export const useItemMutate = () => {
    const [mutateItem, helpers] = useMutation<EditItem, EditItemVariables>(editItemQuery, {
        refetchQueries: ['Items', 'Item']
    });

    const saveItem = (item: ItemValues) => {

        return mutateItem({
            variables: {
                input: {
                    id: item.id ? item.id : undefined,
                    name: item.title,

                    brand: item.brand,
                    color: item.color,
                    size: item.size,
                    volume: item.volume,

                    location: item.location.id,
                    group: item.group.id,
                    status: item.status.id,
                }
            }
        });
    };

    return {saveItem, helpers};
}

export const emptyForeignEntity = {
    id: "",
    name: "",
}

export const emptyItem: ItemValues = {
    id: "",
    title: "",

    status: emptyForeignEntity,
    location: emptyForeignEntity,
    group: emptyForeignEntity,

    brand: "",
    color: "",
    size: "",
    volume: "",
};

