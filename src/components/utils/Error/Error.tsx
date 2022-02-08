import styles from './Error.module.css';

export interface ErrorProps {
    errors: (string | undefined)[],
}

export const Error = ({errors}: ErrorProps) => {
    if (errors.some(err => err)) {
        return <div className={styles.error}>
            Упс! Кажется, что-то сломалось. Проверьте, что с интернетом всё в порядке, попробуйте перезагрузить старницу. Вот сообщение об ошибке:
            <div className={styles.box}>{errors.filter(err => err).join('; ')}</div>
        </div>
    }

    return null;
}