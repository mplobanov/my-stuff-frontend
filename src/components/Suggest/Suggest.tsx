import {Input, InputProps} from "../Input/Input";
import {useField} from "formik";
import styles from './Suggest.module.css';
import {useCallback, useEffect, useState} from "react";
import {Loading} from "../Loading/Loading";
import {pickColor} from "../../utils/pickColor";
import {SubmitState} from "../../utils/SubmitText";

export interface Suggestion {
    name: string,
    id: string,
}


export interface SuggestProps extends InputProps {
    /**
     * If undefined, it means suggestions are loading
     */
    suggestions?: Suggestion[],
}

export const Suggest = ({name, loading, placeholder, suggestions, editable, setEdited, big, colorful, submitState}: SuggestProps) => {
    const [field, , helpers] = useField(`${name}.id`);
    const [nameField, , nameHelpers] = useField(`${name}.name`);

    const [suggOpened, setSuggOpened] = useState(false);

    const handleClick = useCallback((sugg: Suggestion) => {
        nameHelpers.setValue(sugg.name, false);
        setTimeout(() => nameHelpers.setTouched(true, true));
        helpers.setValue(sugg.id);
        setSuggOpened(false);
    }, [helpers, nameHelpers]);

    useEffect(() => {
        if (submitState === SubmitState.Submitting) {
            setSuggOpened(false);
        }
    },[submitState, setSuggOpened]);

    useEffect(() => {
        if (field.value === '') {
            const found = suggestions?.find(sugg => sugg.name === nameField.value);
            if (found) {
                helpers.setValue(found.id);
            }
            return;
        }
        if (suggestions && !suggestions?.some(sugg => (field.value === sugg.id) && (nameField.value === sugg.name))) {
            helpers.setValue('');
        }
    }, [suggestions, field, nameField, helpers]);

    return <div className={styles.container}>
        <div onClick={() => setSuggOpened((opened) => !opened)} >
            <Input name={`${name}.name`} placeholder={placeholder} editable={editable} setEdited={setEdited} big={big} loading={loading} colorful={colorful} submitState={submitState}/></div>
        {suggOpened &&
        <div className={styles.suggestions}>
            {suggestions && suggestions.map((suggestion) => <div className={styles.suggestion}
                                                                 onClick={() => handleClick(suggestion)}
                                                                 style={colorful ? {background: pickColor(suggestion.name)} : {}}
                                                                 key={suggestion.id}>{suggestion.name}</div>)}
            {!suggestions && <div className={styles.suggestion}><Loading values={[true]} /></div>}
        </div>}
    </div>
};