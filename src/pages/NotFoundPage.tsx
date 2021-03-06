import React from "react";
import {Page} from "../components/ui/Page/Page";
import {Header} from "../components/ui/Header/Header";
import {useUser} from "../hooks/useUser";
import {Button} from "../components/ui/Button/Button";
import {useNavigate} from "react-router-dom";
import {Support} from "../components/ui/Support/Support";

export const NotFoundPage: React.FC = () => {
    const {data} = useUser();
    const navigate = useNavigate();

    return (<Page>
        <Header headerText={"Не нашлось"} description={`Ошибка 404. Проверьте адрес еще раз.`} />
        {!data?.currentUser?.id &&
            <Button text={"Войти"} onClick={() => navigate("/login")} primary />
        }
        <Support />
    </Page>)
}