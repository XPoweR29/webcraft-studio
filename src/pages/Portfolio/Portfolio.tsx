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
import { useRef } from "react";

export const Portfolio = () => {
	const ref = useRef(null);

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

					<div className={styles.itemsContainer} ref={ref}>
						<AssuranceItem parentRef={ref} animeDelay={0.2} icon={personality}>Indywidualne podejście</AssuranceItem>
						<AssuranceItem parentRef={ref} animeDelay={0.4} icon={quality}>Profesjonalizm</AssuranceItem>
						<AssuranceItem parentRef={ref} animeDelay={0.6} icon={communication}>Jasna komunikacja</AssuranceItem>
						<AssuranceItem parentRef={ref} animeDelay={0.8} icon={deadline}>Terminowość</AssuranceItem>
						<AssuranceItem parentRef={ref} animeDelay={1} icon={support}>Wsparcie po wdrożeniu</AssuranceItem>
						<AssuranceItem parentRef={ref} animeDelay={1.2} icon={innovation}>Innowacyjne podejście</AssuranceItem>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
