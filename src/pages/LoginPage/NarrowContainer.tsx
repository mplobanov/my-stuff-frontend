import React from "react";
import styles from './LoginPage.module.css';
import {Page} from "../../components/Page/Page";

export const NarrowContainer: React.FC = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.narrow}>
                <Page>
                    {children}
                </Page>
            </div>
        </div>
    );

}