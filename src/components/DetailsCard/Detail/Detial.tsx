import styles from './Detail.module.css';
import {Input} from "../../Input/Input";
import React from "react";
import {Suggest, Suggestion} from "../../Suggest/Suggest";
import {useField} from "formik";
import {SubmitState} from "../../../utils/SubmitText";

interface DetailProps {
    title: string;
    error?: string,
}

interface InputDetailProps extends DetailProps {
    editable: boolean,
    name: string,
    setEdited: (edited: boolean) => void;
    big?: boolean,
    loading?: boolean,
    submitState?: SubmitState,
    password?: boolean,
}

interface SuggestDetailProps extends InputDetailProps {
    suggestions?: Suggestion[],
}

export const Detail: React.FC<DetailProps> = ({title, error, children}) => {
    return <div className={`${styles.container}`} >
            {children}
        <div className={`${styles.key} ${error ? styles.error : ''}`}>{error ? error :title}</div>
    </div>;
};

export const InputDetail = ({title, ...props}: InputDetailProps) => {
    const [ ,meta, ] = useField(props.name);

    return <Detail title={title} error={meta.touched ? meta.error : ''}>
        <Input placeholder={"N/A"} {...props} />
    </Detail>
}

export const SuggestDetail = ({title, ...props}: SuggestDetailProps) => {
    const [ ,meta, ] = useField(`${props.name}.name`);

    return <Detail title={title} error={meta.touched ? meta.error : ''}>
        <Suggest placeholder={"N/A"} {...props} />
    </Detail>
}