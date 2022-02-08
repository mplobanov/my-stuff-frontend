import React from "react";
import {Header} from "../../components/ui/Header/Header";
import styles from "../LoginPage/LoginPage.module.css";
import {translate} from "../../utils/translate";
import {Form, Formik} from "formik";
import {InputDetail} from "../../components/logic/DetailsCard/Detail/Detial";
import noop from "../../utils/noop";
import {Button} from "../../components/ui/Button/Button";
import {useRegister} from "../../hooks/useUser";
import {useNavigate} from "react-router-dom";
import {NarrowContainer} from "../LoginPage/NarrowContainer";

export const RegisterPage: React.FC = () => {
    const {register, registerResults} = useRegister();

    const navigate = useNavigate();

    const initialValues = {
        login: '',
        password: '',
        passwordRepeat: '',
        firstName: ''
    };

    const handleSubmit = async (values: typeof initialValues) => {
        const res = await register(values.login, values.password, values.firstName);
        if (res?.data?.tokenAuth) {
            navigate("/");
        }
    };

    const validate = (values: typeof initialValues) => {
        let errors: Record<string, string> = {};
        if (!values.login) {
            errors['login'] = 'Логин обязателен';
        }
        if (!values.firstName) {
            errors['firstName'] = 'Имя обязательно';
        }
        if (values.password.length < 8) {
            errors['password'] = 'Минимум 8 символов';
        }
        if (values.passwordRepeat !== values.password) {
            errors['passwordRepeat'] = 'Пароли не совпадают.';
        }
        return errors;
    }

    return (
        <NarrowContainer>
            <Header headerText={"Войти"}/>
            <div className={styles.error}>{translate(registerResults.error?.message)}</div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
                {props => <Form onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        return props.submitForm();
                    }
                }
                }>
                    <InputDetail editable={true} name={'firstName'} setEdited={noop} title={'Имя'} placeholder={"Иван"}/>
                    <InputDetail editable={true} name={'login'} setEdited={noop} title={'Логин'} placeholder={"i.ivanov"}/>
                    <InputDetail editable={true} name={'password'} setEdited={noop} title={'Пароль'} password placeholder={""}/>
                    <InputDetail editable={true} name={'passwordRepeat'} setEdited={noop} title={'Пароль еще раз'} placeholder={""}
                                 password/>
                    <div className={styles.buttonSpace} />
                    <Button text={registerResults.loading ? "Регистрируем..." : 'Зарегистрироваться'}
                            onClick={props.submitForm}/>
                </Form>}
            </Formik>
            <div className={styles.register} onClick={() => navigate("/login")}>
                Войти
            </div>
        </NarrowContainer>
    );
}