import {DetailsCard} from "../../components/DetailsCard/DetailsCard";
import {useNavigate, useParams} from "react-router-dom";
import {emptyItem, ItemValues, useItem, useItemMutate} from "../../hooks/useItems";
import {Error} from "../../components/Error/Error";
import {useLocationMutate, useLocationSuggestions} from "../../hooks/useLocations";
import {Formik} from "formik";
import {useGroupMutate, useGroupSuggestions} from "../../hooks/useGroups";
import {useStatusMutate, useStatusSuggestions} from "../../hooks/useStatuses";
import React, {useEffect, useState} from "react";
import {object, string} from "yup";
import {Page} from "../../components/Page/Page";
import {Header} from "../../components/Header/Header";
import {Cog} from "../../components/Cog/Cog";
import {SubmitState} from "../../utils/SubmitText";

export const ItemPage: React.FC = () => {
    const itemID = useParams().itemID;

    const {itemValues, loading, error} = useItem(itemID);
    
    const {saveItem, helpers: itemHelpers} = useItemMutate()
    const {loading: saveLoading, error: saveError} = itemHelpers;
    
    const {saveGroup, helpers: groupHelpers} = useGroupMutate();
    const {loading: groupLoading, error: groupError} = groupHelpers;

    const {saveStatus, helpers: statusHelpers} = useStatusMutate();
    const {loading: statusLoading, error: statusError} = statusHelpers;

    const {saveLocation, helpers: locationHelpers} = useLocationMutate();
    const {loading: locationLoading, error: locationError} = locationHelpers;

    const [submitState, setSubmitState] = useState(SubmitState.NotSubmitted);

    const navigate = useNavigate();

    const handleSubmit = async (values: ItemValues) => {
        if (values.group.id === '') {
            const res = await saveGroup(values.group);
            values.group.id = res.data?.editGroup?.group?.id ?? '';
        }
        if (values.status.id === '') {
            const res = await saveStatus(values.status);
            values.status.id = res.data?.editStatus?.status?.id ?? '';
        }
        if (values.location.id === '') {
            const res = await saveLocation(values.location);
            values.location.id = res.data?.editLocation?.location?.id ?? '';
        }
        await saveItem(values);
        await setSubmitState(SubmitState.Submitted);
        await setTimeout(() => setSubmitState(SubmitState.NotSubmitted), 3110);
    }

    useEffect(() => {
        if (saveLoading || groupLoading || statusLoading || locationLoading) {
            setSubmitState(SubmitState.Submitting);
        }
    }, [groupLoading, locationLoading, saveLoading, setSubmitState, statusLoading]);

    return (
        <Page>
            <Header headerText={itemID ? "Редактировать вещь" : "Добавить вещь"} description={"Статус, группу и локацию можно вписать новую - она создастся автоматически."} sideAction={<Cog onClick={() => {navigate('/settings')}}/>}/>

                <Formik
                    initialValues={emptyItem}
                    onSubmit={handleSubmit}
                    validationSchema={object({
                        id: string(),

                        title: string().required(),

                        brand: string(),
                        color: string(),
                        size: string(),
                        volume: string(),

                        location: object({
                            id: string(),
                            name: string().required('Локация обязательна'),
                        }),
                        group: object({
                            id: string(),
                            name: string().required('Группа обязательна'),
                        }),
                        status: object({
                            id: string(),
                            name: string().required('Статус обязателен'),
                        }),
                    })}>
                    <DetailsCard
                        editable={!itemID}
                        initialValues={itemValues}
                        useLocSuggestions={useLocationSuggestions}
                        useGroupSuggestions={useGroupSuggestions}
                        useStatusSuggestions={useStatusSuggestions}
                        loading={loading}
                        submitState={submitState}
                    />
                </Formik>
                <Error errors={[error?.message, saveError?.message, groupError?.message, statusError?.message, locationError?.message]}/>
        </Page>
    );
}