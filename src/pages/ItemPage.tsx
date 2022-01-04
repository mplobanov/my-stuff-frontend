import {DetailsCard, ForeignEntity, ItemValues} from "../components/DetailsCard/DetailsCard";
import {useParams} from "react-router-dom";
import {emptyItem, useItem} from "../hooks/useItems";
import {Error} from "../components/Error/Error";
import {useMemo} from "react";
import {useLocationSuggestions} from "../hooks/useLocations";
import {Formik} from "formik";
import {Center} from "../components/Center/Center";

export const ItemPage: React.FC = () => {
    const itemID = useParams().itemID;

    const {data: itemRaw, loading, error} = useItem({
        variables: {
            id: itemID ?? '',
        }
    });

    const itemValues = useMemo(() => {
        if (itemRaw) {
            return {
                title: itemRaw.item?.name,

                status: itemRaw.item?.status as ForeignEntity,
                location: itemRaw.item?.location as ForeignEntity,
                group: itemRaw.item?.group as ForeignEntity,

                brand: itemRaw.item?.brand,
                color: itemRaw.item?.color,
                size: itemRaw.item?.size,
                volume: itemRaw.item?.volume
            } as ItemValues;
        }
        return emptyItem;
    }, [itemRaw]);

    console.log(itemValues);

    const handleSubmit = (values: ItemValues) => {
        console.log(values);
    }

    return <Center><Formik
        initialValues={emptyItem}
        onSubmit={handleSubmit}><
        DetailsCard editable={false} initialValues={itemValues} useLocSuggestions={useLocationSuggestions}
                    loading={loading}/>
    </Formik><Error errors={[error?.message]}/></Center>;
}