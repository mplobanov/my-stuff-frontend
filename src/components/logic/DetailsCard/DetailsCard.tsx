import styles from './DetailsCard.module.css';
import {InputDetail, SuggestDetail} from "./Detail/Detial";
import {Button} from "../../ui/Button/Button";
import {Form, useFormikContext} from "formik";
import {pickColor} from "../../../utils/pickColor";
import {useEffect, useMemo, useState} from "react";
import {Input} from "../Input/Input";
import {useLocationSuggestions} from "../../../hooks/useLocations";
import {useGroupSuggestions} from "../../../hooks/useGroups";
import {Suggest} from "../Suggest/Suggest";
import {useStatusSuggestions} from "../../../hooks/useStatuses";
import {ItemValues} from "../../../hooks/useItems";
import {SubmitState, submitText} from "../../../utils/SubmitText";

export interface DetailsCardProps {
    editable: boolean,
    initialValues: ItemValues,
    loading?: boolean,
    useLocSuggestions: typeof useLocationSuggestions,
    useGroupSuggestions: typeof useGroupSuggestions,
    useStatusSuggestions: typeof useStatusSuggestions,
    submitState?: SubmitState,
}

export const DetailsCard = ({editable, initialValues, loading, useLocSuggestions, useGroupSuggestions, useStatusSuggestions, submitState}: DetailsCardProps) => {

    const {values, handleSubmit, setValues} = useFormikContext<ItemValues>();

    useEffect(() => {
        setValues(initialValues);
        return () => {};
    }, [setValues, initialValues]);

    const locSuggs = useLocSuggestions();
    const groupSuggs = useGroupSuggestions();
    const statusSuggs = useStatusSuggestions();


    const [edited, setEdited] = useState(false);

    useEffect(() => {
        if (submitState === SubmitState.Submitted) {
            const tm = setTimeout(() => setEdited(false), 3000);
            return () => clearTimeout(tm);
        }
    }, [setEdited, submitState]);

    const detailProps = useMemo(() => {
        return { editable, setEdited, loading, submitState};
    }, [editable, setEdited, loading, submitState]);

    return (
            <Form>
                <div className={styles.card}>
                    <div className={styles.titleRow}>
                        <div className={styles.title}>
                            <Input name={'title'} editable={editable} setEdited={setEdited} big={true} loading={loading} placeholder={"Название"} submitState={submitState}/>
                        </div>

                        <div className={styles.status}
                             style={{background: `${pickColor(values.status?.name ?? '')}`}}>
                            <Suggest name={'status'} suggestions={statusSuggs} colorful={true} placeholder={"Статус"} {...detailProps}/>
                            {/*<span className={styles.statusName}>{values.status?.name}</span>*/}
                        </div>
                    </div>
                    <div className={styles.detailsRow}>
                        <InputDetail title={"Марка"} name={'brand'} {...detailProps} />
                        <InputDetail title={"Цвет"} name={'color'} {...detailProps} />
                        <InputDetail title={"Размер"} name={'size'} {...detailProps} />
                        <InputDetail title={"Объем"} name={'volume'} {...detailProps} />
                        <SuggestDetail title={"Локация"} name={'location'} {...detailProps} suggestions={locSuggs}/>
                        <SuggestDetail title={"Группа"} name={'group'} {...detailProps} suggestions={groupSuggs}/>
                    </div>
                    <div className={`${styles.save} ${edited || editable ? "" : styles.save_inactive}`}>
                        <Button text={submitText(submitState)} onClick={handleSubmit}/>
                    </div>
                </div>
            </Form>
        );
};