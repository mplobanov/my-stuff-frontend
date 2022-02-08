import React from "react";
import {Page} from "../../components/ui/Page/Page";
import {Header} from "../../components/ui/Header/Header";
import {useLogout, useUser} from "../../hooks/useUser";
import {Loading} from "../../components/ui/Loading/Loading";
import {Error} from "../../components/utils/Error/Error";
import styles from './SettingsPage.module.css';
import {UserCard} from "../../components/ui/UserCard/UserCard";
import {Button} from "../../components/ui/Button/Button";
import {useNavigate} from "react-router-dom";
import {Support} from "../../components/ui/Support/Support";

export const SettingsPage: React.FC = () => {
    const {data, loading, error} = useUser();

    const {logout} = useLogout();

    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/");
    }

    return (
        <Page>
            <Header headerText={"Настройки"} />
            <Loading values={[loading]} />
            <Error errors={[error?.message]} />
            {!loading && <div className={styles.user_block}>
                <UserCard name={data?.currentUser?.firstName ?? ''} login={data?.currentUser?.username ?? ''} />
                <Button text={"Выйти"} onClick={handleLogout} />
            </div>}
            <div className={styles.editFE}>
                <div className={styles.editFE_item} onClick={() => navigate("/list/group")}>Редактировать группы</div>
                <div className={styles.editFE_item} onClick={() => navigate("/list/status")}>Редактировать статусы</div>
                <div className={styles.editFE_item} onClick={() => navigate("/list/location")}>Редактировать локации</div>
            </div>
            <Support />
        </Page>
    );
}