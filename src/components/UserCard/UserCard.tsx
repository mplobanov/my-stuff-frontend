import React from "react";
import styles from './UserCard.module.css';
import {Avatar} from "../Avatar/Avatar";

export interface UserCardProps {
    name: string,
    login: string,
}

export const UserCard: React.FC<UserCardProps> = ({name, login}) => {
    return (
        <div className={styles.container}>
            <Avatar name={name} />
            <div className={styles.userinfo}>
                <div>{'Пользователь: '} <span className={styles.accent}>{name}</span></div>
                <div>{'Логин: '} <span className={styles.accent}>{login}</span></div>
            </div>

        </div>
    );
}