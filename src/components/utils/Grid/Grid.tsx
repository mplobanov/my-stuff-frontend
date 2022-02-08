import React from "react";
import styles from './Grid.module.css';

interface GridProps {

}

export const Grid: React.FC<GridProps> = ({children}) => {
    return <div className={styles.grid}>{children}</div>;
}