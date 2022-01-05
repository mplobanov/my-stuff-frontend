import React from "react";
import {Header} from "../../components/Header/Header";
import styles from "../LoginPage/LoginPage.module.css";
import {translate} from "../../utils/translate";
import {Form, Formik} from "formik";
import {InputDetail} from "../../components/DetailsCard/Detail/Detial";
import noop from "../../utils/noop";
import {Button} from "../../components/Button/Button";
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
        if (values.passwordRepeat.length < 8) {
            errors['passwordRepeat'] = 'Минимум 8 символов';
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
                    <InputDetail editable={true} name={'firstName'} setEdited={noop} title={'Имя'}/>
                    <InputDetail editable={true} name={'login'} setEdited={noop} title={'Логин'}/>
                    <InputDetail editable={true} name={'password'} setEdited={noop} title={'Пароль'} password/>
                    <InputDetail editable={true} name={'passwordRepeat'} setEdited={noop} title={'Пароль еще раз'}
                                 password/>
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