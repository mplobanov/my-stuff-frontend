import {Chip} from "./Chip/Chip";
import styles from './ChipGroup.module.css';

export interface ChipProps {
    values: {
        name: string,
        id: string,
    }[],
    onClick: (newId: string) => void,
    onAdd: () => void,
    selectedId?: string,
}

export const ChipGroup = ({values, onAdd, onClick, selectedId}: ChipProps) => {

    return <div className={styles.chipGroup}>
        {values.map(value => <Chip
            text={value.name}
            selected={value.id === selectedId}
            key={value.id}
            onClick={() => onClick(value.id)}
        />)}
        <Chip text={'Добавить +'} selected={!selectedId} onClick={onAdd}/>
    </div>
};