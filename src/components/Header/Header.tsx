import styles from './Header.module.css';

interface HeaderProps {
    headerText: string,
    description?: string,
}

export const Header: React.FC<HeaderProps> = ({headerText, description}) => {
  return <div className={styles.container}>
      <div className={styles.header}>{headerText}</div>
      {description && <div className={styles.description}>{description}</div>}
  </div>;
};