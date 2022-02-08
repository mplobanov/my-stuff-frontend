import {NarrowContainer} from "../LoginPage/NarrowContainer";
import React, {useEffect, useState} from "react";
import {Suggestion} from "../../components/logic/Suggest/Suggest";
import {FEMutateHook} from "../../hooks/useGroups";
import {useNavigate, useParams} from "react-router-dom";
import {Header} from "../../components/ui/Header/Header";
import {emptyForeignEntity} from "../../hooks/useItems";
import {Form, Formik} from "formik";
import {InputDetail} from "../../components/logic/DetailsCard/Detail/Detial";
import noop from "../../utils/noop";
import {Button} from "../../components/ui/Button/Button";
import {Loading} from "../../components/ui/Loading/Loading";
import {SubmitState, submitText} from "../../utils/SubmitText";
import {Cog} from "../../components/ui/Cog/Cog";
import styles from '../LoginPage/LoginPage.module.css';

export interface FEEditPageProps {
    useFESuggestions: () => (Suggestion[] | undefined),
    useFEMutate: FEMutateHook,
    entityName: string,
    create?: boolean,
}

// Foreign Entity Edit Page
export const FEEditPage: React.FC<FEEditPageProps> = ({useFEMutate, useFESuggestions, entityName, create}) => {
    const entityID = useParams().entityID;

    const [submitState, setSubmitState] = useState(SubmitState.NotSubmitted);

    const suggs = useFESuggestions();
    const {mutate, loading} = useFEMutate();

    const initialValues = emptyForeignEntity;

    useEffect(() => {
        if (loading && submitState === SubmitState.NotSubmitted) {
            setSubmitState(SubmitState.Submitting);
        } else if (!loading && submitState === SubmitState.Submitting) {
            setSubmitState(SubmitState.Submitted);
        }
    }, [loading, submitState]);

    const handleSubmit = async (values: typeof initialValues) => {
        await mutate(values);
    };

    const navigate = useNavigate();

    return (
        <NarrowContainer>
            <Header headerText={`${create ? "Создать" : "Редактировать"} ${entityName}`} sideAction={<Cog onClick={() => {navigate('/settings')}}/>} />
            <Loading values={[!suggs]} />
            {suggs && <Formik initialValues={suggs.find(s => s.id === entityID) ?? emptyForeignEntity} onSubmit={handleSubmit}>
                {props => <Form>
                    <InputDetail editable={true} name={'name'} setEdited={noop} title={'Название'} />
                    <div className={styles.buttonSpace} />
                    <Button text={submitText(submitState)} onClick={() => props.submitForm()} />
                </Form>}
            </Formik>}

        </NarrowContainer>
    );
};
