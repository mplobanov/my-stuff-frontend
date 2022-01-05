import {NarrowContainer} from "../LoginPage/NarrowContainer";
import React, {useEffect, useState} from "react";
import {Suggestion} from "../../components/Suggest/Suggest";
import {FEMutateHook} from "../../hooks/useGroups";
import {useNavigate, useParams} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {emptyForeignEntity} from "../../hooks/useItems";
import {Form, Formik} from "formik";
import {InputDetail} from "../../components/DetailsCard/Detail/Detial";
import noop from "../../utils/noop";
import {Button} from "../../components/Button/Button";
import {Loading} from "../../components/Loading/Loading";
import {SubmitState, submitText} from "../../utils/SubmitText";
import {Cog} from "../../components/Cog/Cog";

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
                    <Button text={submitText(submitState)} onClick={() => props.submitForm()} />
                </Form>}
            </Formik>}

        </NarrowContainer>
    );
};
