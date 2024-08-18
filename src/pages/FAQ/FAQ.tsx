import { Accordion } from "../../components/Acordion/Accordion";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { FAQType } from "../../types/types";
import questions from "../../assets/data/faq.json";
import questionsImg from "../../assets/images/quesrtions.svg";
import styles from "./FAQ.module.scss";
import { ScrollSpySection } from "../../components/ScrollSpySection/ScrollSpySection";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

export const FAQ = () => {
	const { setVisibleSection } = useContext(AppContext)!;
	const faq: FAQType[] = questions;

	return (
		<ScrollSpySection id="faq" className={styles.faq} onVisible={()=>setVisibleSection("faq")}>
			<Wrapper className={styles.wrapper}>
				<img
					src={questionsImg}
					className={styles.questionsImg}
					alt="quiestions"
				/>

				<div className={styles.headingContainer}>
					<h2 className={styles.heading}>FAQ</h2>
					<h3 className={styles.title}>
						<span>Najczęściej</span>
						<span>zadawane</span>
						<span>pytania</span>
					</h3>
				</div>

				<div className={styles.contentContainer}>
					<div className={styles.faqContainer}>
						{faq.map(({ question, answer }, index) => (
							<Accordion title={question} key={index}>
								{answer}
							</Accordion>
						))}
					</div>

					<div className={styles.ctaSection}>
						<h2 className={styles.ctaSection_title}>Masz pytania?</h2>
						<p className={styles.ctaSection_text}>
							Dowiedz się jak możemy pomóc w realizacji Twoich celów oraz jak
							nasze usługi mogą przyczynic się do sukcesu Twojej firmy.
						</p>

						<a href="#contact" className={styles.ctaSection_btn}>
							Skontaktuj się
						</a>
					</div>
				</div>
			</Wrapper>
		</ScrollSpySection>
	);
};
