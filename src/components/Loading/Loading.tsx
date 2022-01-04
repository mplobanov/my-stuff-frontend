import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import styles from './Loading.module.css'

export interface LoadingProps {
    values: (boolean | undefined)[]
}

export const Loading = ({ values }: LoadingProps) => {
    if (values.some(v => Boolean(v))) {
        return <div className={styles.container}>
            <FontAwesomeIcon icon={faCircle} className={styles.icon} />
        </div>
    }
    return null;
}