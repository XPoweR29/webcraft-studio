import {useRef} from "react";
import { Feature } from "../../types/types";
import { motion, useInView } from "framer-motion";
import styles from "./FeatureItem.module.scss";

export const FeatureItem = ({ title, description, icon }: Feature) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});

	return (
		<motion.div
			className={styles.feature}
            ref={ref}
			initial={{ opacity: 0, y: 50 }}
            animate={isInView? {opacity: 1, y:0}: {}}
			transition={{ duration: 0.8, type: "spring", stiffness: 70 }}>

			<img src={icon} alt="feature icon" />

			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>
		</motion.div>
	);
};
