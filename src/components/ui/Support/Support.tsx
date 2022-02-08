import React from "react";
import styles from './Support.module.css';

export const Support: React.FC = () => {
    return <div className={styles.container}>
        <a className={styles.secondary} href={"https://t.me/mplobanov"}>Написать в поддержку</a>
    </div>;
};