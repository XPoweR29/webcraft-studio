import { Wrapper } from "../../components/Wrapper";
import tech1 from "../../assets/icons/tech_1.png";
import tech2 from "../../assets/icons/tech_2.png";
import tech3 from "../../assets/icons/tech_3.png";
import styles from "./Home.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Nav } from "../../components/Nav/Nav";
import { AuroraBackground } from "../../components/AuroraBg/AuroraBg";

export const Home = () => {
	return (
		<section className={styles.home} id="home">
			<Wrapper className={styles.wrapper}>
				<Nav />

				<div className={styles.contentContainer}>
					<AuroraBackground className={styles.auroraBg}>
						<div className={styles.lightBox}>
							<h1 className={styles.heroHeading}>
								<span className={styles.line1}>Tworzymy</span>
								<span className={styles.line2}>strony internetowe</span>
								<span className={styles.line3}>które przyniosą Ci sukces</span>
							</h1>

							<p className={styles.text}>
								Profesjonalne usługi web developmentu. Stworzymy dla Ciebie
								efektywną stronę internetową, która przyciągnie klientów.
							</p>

							<ul className={styles.featureList}>
								<li className={styles.featureItem}>
									<Icon icon="solar:arrow-right-broken" />
									<p>Indywidualny Projekt</p>
								</li>

								<li className={styles.featureItem}>
									<Icon icon="solar:arrow-right-broken" />
									<p>Intuicyjny CMS</p>
								</li>

								<li className={styles.featureItem}>
									<Icon icon="solar:arrow-right-broken" />
									<p>Konkurencyjna Oferta</p>
								</li>
							</ul>

							<a href="/" className={styles.ctaBtn}>
								Skorzystaj z oferty
							</a>
						</div>
					</AuroraBackground>

					<div className={styles.darkBox}>
						<h2 className={styles.heading}>
							<span className={styles.line1}>Przenieś swój biznes</span>
							<span className={styles.line2}>na wyższy poziom.</span>
						</h2>

						<div className={styles.techCard}>
							<p>
								Budujemy nowoczesne projekty z wykorzystaniem najnowszych
								technologii.
							</p>

							<div className={styles.iconBox}>
								<img src={tech1} alt="icon of technology" />
								<img src={tech2} alt="icon of technology" />
								<img src={tech3} alt="icon of technology" />
							</div>
						</div>

						<div className={styles.reviewContainer}>
							{/* review swiper  // eslint-disable-line no-unused-vars*/}
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
