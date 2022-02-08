import styles from './Chip.module.css';

export interface ChipProps {
    text: string,
    selected: boolean,
    onClick: () => void,
}

export const Chip = ({text, selected, onClick}: ChipProps) => {
    return <span
        className={`${styles.chip} ${selected ? styles.selected : styles.regular}`}
        onClick={onClick}
    >
        {text}
    </span>
}