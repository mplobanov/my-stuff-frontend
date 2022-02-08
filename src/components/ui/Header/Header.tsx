import styles from './Header.module.css';

interface HeaderProps {
    headerText: string,
    description?: string,
    sideAction?: JSX.Element,
}

export const Header: React.FC<HeaderProps> = ({headerText, description, sideAction}) => {
  return <div className={styles.container}>
      <div className={styles.header_container}>
          <div className={styles.header}>{headerText}</div>
          {sideAction && sideAction}
      </div>

      {description && <div className={styles.description}>{description}</div>}
  </div>;
};