import { Feature } from "../../types/types";
import styles from "./FeatureItem.module.scss";

export const FeatureItem = ({title, description, icon}: Feature) => {
    return (
        <div className={styles.feature}>
            <img src={icon} alt="feature icon" />

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
