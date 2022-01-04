import styles from './Detail.module.css';
import {Input} from "../../Input/Input";
import React from "react";
import {Suggest, Suggestion} from "../../Suggest/Suggest";

interface DetailProps {
    title: string;
}

interface InputDetailProps extends DetailProps {
    editable: boolean,
    name: string,
    setEdited: (edited: boolean) => void;
    big?: boolean,
    loading?: boolean,
}

interface SuggestDetailProps extends InputDetailProps {
    suggestions?: Suggestion[],
}

export const Detail: React.FC<DetailProps> = ({title, children}) => {
    return <div className={`${styles.container}`} >
            {children}
        <div className={styles.key}>{title}</div>
    </div>;
};

export const InputDetail = ({title, ...props}: InputDetailProps) => {
    return <Detail title={title}>
        <Input placeholder={"N/A"} {...props} />
    </Detail>
}

export const SuggestDetail = ({title, ...props}: SuggestDetailProps) => {
    return <Detail title={title}>
        <Suggest placeholder={"N/A"} {...props} />
    </Detail>
}