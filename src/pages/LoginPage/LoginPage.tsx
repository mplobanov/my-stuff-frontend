import {Header} from "../../components/Header/Header";
import {Form, Formik} from "formik";
import {InputDetail} from "../../components/DetailsCard/Detail/Detial";
import noop from "../../utils/noop";
import {Button} from "../../components/Button/Button";
import {useLogin} from "../../hooks/useUser";
import {useMemo} from "react";
import {useNavigate} from "react-router-dom";
import styles from './LoginPage.module.css';
import {translate} from "../../utils/translate";
import {object, string} from "yup";
import {NarrowContainer} from "./NarrowContainer";

export const LoginPage: React.FC = () => {
    const initialValues = {
        login: "",
        password: "",
    };

    const {login, loginResults} = useLogin();

    const navigate = useNavigate();

    const handleSubmit = async (values: typeof initialValues) => {
        const res = await login(values.login, values.password);
        if (res.data?.tokenAuth) {
            navigate("/");
        }
    }

    const validationSchema = useMemo(() => {
        return object({login: string().required("Логин обязателен"), password: string().required("Пароль обязателен")});
    }, []);

    return (
        <NarrowContainer>
                    <Header headerText={"Войти"}/>
                    <div className={styles.error}>{translate(loginResults.error?.message)}</div>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                        {props => <Form onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                props.submitForm();
                            }
                        }
                        }>
                            <InputDetail editable={true} name={'login'} setEdited={noop} title={'Логин'} placeholder={""}/>
                            <InputDetail editable={true} name={'password'} setEdited={noop} title={'Пароль'} password placeholder={""}/>
                            <div className={styles.buttonSpace} />
                            <Button text={loginResults.loading ? "Входим..." : 'Войти'} onClick={props.submitForm}/>
                        </Form>}
                    </Formik>
                    <div className={styles.register} onClick={() => navigate("/register")}>
                        Зарегистрироваться
                    </div>
        </NarrowContainer>
    );
}