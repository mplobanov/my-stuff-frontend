import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Label.module.css';


interface LabelProps {
    /**
     * Name on the label
     */
    title: string;
    /**
     * If selected, there will be a tick next to title
     */
    selected?: boolean;
    /**
     * Background color. Default: rgba(231, 231, 231, 1)
     */
    backgroundColor?: string;
    /**
     * If True, title color will be white, otherwise - rgba(116, 116, 116, 1)
     */
    lightTitle?: boolean;
    /**
     * onClick handler
     */
    onClick: () => void;
}

export const Label = ({title, selected = false, backgroundColor, lightTitle, onClick}: LabelProps) => {
    return <span className={styles.container}
                 style={{
                     backgroundColor: backgroundColor ?? "rgba(231, 231, 231, 1)",
                     color: lightTitle ? "white": "rgba(116, 116, 116, 1)"
                 }}
    onClick={() => onClick()}>
        {selected ? <><FontAwesomeIcon icon={faCheck}/>{"  "}</> : null}{title}
    </span>;
}