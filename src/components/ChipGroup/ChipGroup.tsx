import {Chip} from "./Chip/Chip";
import styles from './ChipGroup.module.css';
import {useCallback, useState} from "react";

export interface ChipProps {
    values: {
        name: string,
        id: string,
    }[],
    onChange: (newId: string) => void,
    onAdd: () => void,
}

export const ChipGroup = ({values, onAdd, onChange}: ChipProps) => {
    const [selectedId, setSelectedId] = useState('');

    const handleClick = useCallback((id: string) => {
        setSelectedId(id);
        onChange(id);
    }, [onChange]);

    return <div className={styles.chipGroup}>
        {values.map(value => <Chip
            text={value.name}
            selected={value.id === selectedId}
            key={value.id}
            onClick={() => handleClick(value.id)}
        />)}
        <Chip text={'Добавить +'} selected={false} onClick={onAdd}/>
    </div>
};