import React, { useState } from "react";
import styles from "./Accordion.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

interface AccordionProps {
	title: string;
	children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	const handleKeyPress = (event: React.KeyboardEvent) => {
		if (event.key === "Enter" || event.key === " ") {
			toggleAccordion();
		}
	};

	return (
		<div className={styles.accordion}>
			<div
				className={styles.header}
				role="button"
				aria-expanded={isOpen}
				tabIndex={0}
				onKeyPress={handleKeyPress}
				onClick={toggleAccordion}>
				<h4
					className={`${styles.question} ${
						isOpen && styles["question--active"]
					}`}>
					{title}
				</h4>
				<Icon
					className={`${styles.icon} ${isOpen && styles["icon--opened"]}`}
					icon="bxs:down-arrow"
				/>
			</div>
			<div className={`${styles.answer} ${isOpen && styles["answer--open"]}`}>
				<p className={styles.answer_text}>{children}</p>
			</div>
		</div>
	);
};
