import styles from './Input.module.css';
import {useCallback, useEffect, useState} from "react";
import {useField} from "formik";
import {pickColor} from "../../../utils/pickColor";
import {SubmitState} from "../../../utils/SubmitText";


export interface InputProps {
    name: string,
    placeholder?: string;
    editable: boolean;
    setEdited: (edited: boolean) => void;
    loading?: boolean;
    big?: boolean;
    colorful?: boolean,
    submitState?: SubmitState,
    password?: boolean,
}


export const Input = ({placeholder, editable, name, setEdited, loading, big, colorful, submitState, password}: InputProps) => {

    const [field, meta, ] = useField<string>(name);

    const [localEditable, setLocalEditable] = useState(editable);

    useEffect(() => {
        setLocalEditable(editable);
    }, [editable]);

    useEffect(() => {
        if (submitState === SubmitState.Submitted) {
            setLocalEditable(false);
        }
    }, [submitState, setLocalEditable])

    const handleClick = useCallback(() => {
        setLocalEditable(true);
        setEdited(true);
    }, [setLocalEditable, setEdited]);

    return (
            <input {...field}
                   className={`
                       ${styles.input}
                       ${localEditable ? '' : styles.non_editable} 
                       ${loading ? styles.loading : ''} 
                       ${big ? styles.big : styles.regular_size}
                       ${meta.touched && meta.error ? styles.error : ''}
                   `}
                   placeholder={placeholder}
                   readOnly={!localEditable}
                   autoComplete={'off'}
                   style={ colorful ? {background: pickColor(field.value ?? '')} : {}}
                   onClick={handleClick}
                   type={password ? 'password' : 'text'}
            />
    );
};