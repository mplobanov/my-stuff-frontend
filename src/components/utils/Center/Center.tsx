import styles from './Center.module.css';

export const Center: React.FC = ({children}) => {
    return <div className={styles.container}>{children}</div>;
};