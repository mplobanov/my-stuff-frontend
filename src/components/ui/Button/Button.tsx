import styles from './Button.module.css';

interface ButtonProps {
    /**
     * Text of the button.
     */
    text: string,
    /**
     * Is button primary (accent)?
     */
    primary?: boolean,
    /**
     * Click handler
     */
    onClick?: () => void,
}

export const Button = ({text, primary, onClick}: ButtonProps) => {
    return <div className={`${styles.button} ${primary ? styles.primary : styles.secondary}`} onClick={() => onClick ? onClick() : null}>
        <span className={styles.text}>{text}</span>
    </div>
};