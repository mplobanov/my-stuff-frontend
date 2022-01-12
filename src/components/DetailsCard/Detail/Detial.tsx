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
    placeholder?: string,
}

interface SuggestDetailProps extends InputDetailProps {
    suggestions?: Suggestion[],
}

export const Detail: React.FC<DetailProps> = ({title, error, children}) => {
    return <div className={`${styles.container}`} >
        <div className={`${styles.key} ${error ? styles.error : ''}`}>{error ? error :title}</div>
            {children}
    </div>;
};

export const InputDetail = ({title, placeholder, ...props}: InputDetailProps) => {
    const [ ,meta, ] = useField(props.name);

    return <Detail title={title} error={meta.touched ? meta.error : ''}>
        <Input placeholder={placeholder ?? "N/A"} {...props} />
    </Detail>
}

export const SuggestDetail = ({title, placeholder, ...props}: SuggestDetailProps) => {
    const [ ,meta, ] = useField(`${props.name}.name`);

    return <Detail title={title} error={meta.touched ? meta.error : ''}>
        <Suggest placeholder={placeholder ?? "N/A"} {...props} />
    </Detail>
}