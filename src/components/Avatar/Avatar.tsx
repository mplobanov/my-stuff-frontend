import React from "react";
import styles from './Avatar.module.css';
import {pickColor} from "../../utils/pickColor";

export interface AvatarProps {
    name: string,
}

export const Avatar: React.FC<AvatarProps> = ({name}) => {
    return (
        <div className={styles.container} style={{backgroundColor: pickColor(name)}}>
            {name.charAt(0)}
        </div>
    );
}