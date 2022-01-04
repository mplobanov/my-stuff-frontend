import styles from './Input.module.css';
import {useCallback, useState} from "react";
import {useField} from "formik";


export interface InputProps {
    name: string,
    placeholder?: string;
    editable: boolean;
    setEdited: (edited: boolean) => void;
    loading?: boolean;
    big?: boolean
}


export const Input = ({placeholder, editable, name, setEdited, loading, big}: InputProps) => {

    const [field, , ] = useField<string>(name);

    const [localEditable, setLocalEditable] = useState(editable);

    const handleClick = useCallback(() => {
        setLocalEditable(true);
        setEdited(true);
    }, [setLocalEditable, setEdited]);

    return (
            <input {...field} className={`${styles.input} ${localEditable ? '' : styles.non_editable} ${loading ? styles.loading : ''} ${big ? styles.big : styles.regular_size}`} placeholder={placeholder}
                    readOnly={!localEditable} autoComplete={'off'}
                onClick={handleClick}
            />
    );
};