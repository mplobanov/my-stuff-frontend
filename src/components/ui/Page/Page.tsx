import React from "react";
import styles from './Page.module.css';

export interface PageProps {

}


export const Page: React.FC<PageProps> = ({children}) => {

    return <div className={styles.page}>
        {children}
    </div>;
}