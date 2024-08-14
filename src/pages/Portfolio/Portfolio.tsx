import { ThreeDCardDemo } from "../../components/PerspectiveCard/PerspectiveCard";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import personality from "../../assets/icons/personality.svg";
import quality from "../../assets/icons/quality.svg";
import communication from "../../assets/icons/communication.svg";
import deadline from "../../assets/icons/deadline.svg";
import support from "../../assets/icons/helpdesk.svg";
import innovation from "../../assets/icons/innovation.svg";
import styles from "./Portfolio.module.scss";
import { projects } from "../../assets/data/projects";
import { AssuranceItem } from "../../components/AssuranceItem/AssuranceItem";

export const Portfolio = () => {
	return (
		<section id="portfolio" className={styles.portfolio}>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>Nasze realizacje</h2>
				<p className={styles.text}>
					Zapraszamy do zapoznania się z naszym portfolio, gdzie prezentujemy
					nasze realizacje. Każdy projekt to dowód naszej pasji, kreatywności i
					zaangażowania w dostarczanie wyjątkowych rozwiązań webowych. Zobacz,
					jak pomogliśmy naszym klientom osiągnąć sukces w sieci.
				</p>

				<div className={styles.projectsContainer}>
					{projects.map(({ title, thumbnail, previewUrl }) => (
						<ThreeDCardDemo
							title={title}
							cardImage={thumbnail}
							previewUrl={previewUrl}
							key={previewUrl}
						/>
					))}
				</div>

				<div className={styles.assuranceSection}>
					<h2 className={styles.title}>Czego możesz oczekiwać?</h2>
					<p className={styles.text}>
						Współpraca z nami to inwestycja w jakość i sukces Twojego projektu.
						Zobacz, jakie korzyści niesie ze sobą współpraca z nami.
					</p>

					<div className={styles.itemsContainer}>
						<AssuranceItem icon={personality}>Indywidualne podejście</AssuranceItem>
						<AssuranceItem icon={quality}>Profesjonalizm</AssuranceItem>
						<AssuranceItem icon={communication}>Jasna komunikacja</AssuranceItem>
						<AssuranceItem icon={deadline}>Terminowość</AssuranceItem>
						<AssuranceItem icon={support}>Wsparcie po wdrożeniu</AssuranceItem>
						<AssuranceItem icon={innovation}>Innowacyjne podejście</AssuranceItem>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
