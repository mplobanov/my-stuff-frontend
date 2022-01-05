import {faCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import styles from './Cog.module.css';

export interface CogProps {
    onClick: () => void;
}

export const Cog = ({onClick}: CogProps) => {
    return (
        <FontAwesomeIcon className={styles.cog} icon={faCog} onClick={onClick}/>
    );
}