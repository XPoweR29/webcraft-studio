import styles from "./AssuranceItem.module.scss";

interface Props {
    icon: string;
    children: React.ReactNode;
}

export const AssuranceItem = ({icon, children}: Props) => {
    return(
        <div className={styles.item}>
            <img src={icon} alt="assurance icon" />
            <p className={styles.description}>{children}</p>
        </div>
    );
}
