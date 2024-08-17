import styles from "./AssuranceItem.module.scss";
import { motion, useInView } from "framer-motion";

interface Props {
	icon: string;
	children: React.ReactNode;
	animeDelay?: number;
	parentRef?: React.MutableRefObject<null>;
}

export const AssuranceItem = ({icon, children, animeDelay, parentRef,}: Props) => {
	const isInView = useInView(parentRef!, { once: true, margin: "-100px" });

	return (
		<motion.div
			className={styles.item}
			initial={{ opacity: 0, scale: 0.5 }}
			animate={isInView ? { opacity: 1, scale: 1 } : {}}
			transition={{ duration: 0.8, delay: animeDelay, ease: [0, 0.71, 0.2, 1.01] }}>

			<img src={icon} alt="assurance icon" />
			<p className={styles.description}>{children}</p>
		</motion.div>
	);
};
