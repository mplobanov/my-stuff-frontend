import styles from './DetailsCard.module.css';
import {InputDetail, SuggestDetail} from "./Detail/Detial";
import {Button} from "../Button/Button";
import {Form, useFormikContext} from "formik";
import {pickColor} from "../../utils/pickColor";
import {useEffect, useState} from "react";
import {Input} from "../Input/Input";
import {useLocationSuggestions} from "../../hooks/useLocations";

export interface DetailsCardProps {
    editable: boolean,
    initialValues: ItemValues,
    loading?: boolean,
    useLocSuggestions: typeof useLocationSuggestions,
}

export interface ForeignEntity {
    id: string,
    name?: string,
}

export interface ItemValues {
    title: string,

    brand: string,
    color: string,
    size: string,
    volume: string,

    location: ForeignEntity,
    status: ForeignEntity,
    group: ForeignEntity,
}

export const DetailsCard = ({editable, initialValues, loading, useLocSuggestions}: DetailsCardProps) => {

    const {values, handleSubmit, setValues} = useFormikContext<ItemValues>();

    useEffect(() => {
        setValues(initialValues);
        return () => {};
    }, [setValues, initialValues]);

    const locSuggs = useLocSuggestions();

    const [edited, setEdited] = useState(false);

    return (
            <Form>
                <div className={styles.card}>
                    <div className={styles.titleRow}>
                        <div className={styles.title}>
                            <Input name={'title'} editable={editable} setEdited={setEdited} big={true} loading={loading} placeholder={"N/A"}/>
                        </div>
                        <div className={styles.status}
                             style={{background: `${pickColor(values.status?.name ?? '')}`}}>
                            <span className={styles.statusName}>{values.status?.name}</span>
                        </div>
                    </div>
                    <div className={styles.detailsRow}>
                        <InputDetail title={"Марка"} name={'brand'} editable={editable} setEdited={setEdited} loading={loading}/>
                        <InputDetail title={"Цвет"} name={'color'} editable={editable} setEdited={setEdited} loading={loading}/>
                        <InputDetail title={"Размер"} name={'size'} editable={editable} setEdited={setEdited} loading={loading}/>
                        <InputDetail title={"Объем"} name={'volume'} editable={editable} setEdited={setEdited} loading={loading}/>
                        <SuggestDetail title={"Локация"} name={'location'} editable={editable} setEdited={setEdited} loading={loading} suggestions={locSuggs}/>
                    </div>
                    {edited &&
                    <div className={styles.save}>
                        <Button text={'Сохранить'} onClick={handleSubmit}/>
                    </div>}
                </div>
            </Form>
        );
};