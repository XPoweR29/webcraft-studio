
import tech1 from "../../assets/icons/tech_1.png";
import tech2 from "../../assets/icons/tech_2.png";
import tech3 from "../../assets/icons/tech_3.png";
import rocketImg from "../../assets/images/rocket.svg";
import risingArrowImg from "../../assets/images/rise_arrow.svg";
import screen_small from "../../assets/images/screen_small.webp";
import screen_big from "../../assets/images/screen_big.webp";
import styles from "./Home.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AuroraBackground } from "../../components/AuroraBg/AuroraBg";
import { WordFlipper } from "../../components/WordFlipper/WordFlipper";
import { ReviewSwiper } from "../../components/ReviewSwiper/ReviewSwiper";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export const Home = () => {
	const { breakpoint } = useBreakpoints();
	const screenRef = useRef(null);
	const cardRef = useRef(null);

	const screenInView = useInView(screenRef, {
		margin: "-200px",
		once: true,
	});

	const cardInView = useInView(cardRef, {
		margin: `${breakpoint.lg?"-100px":"-50px"}`,
		once: true,
	});

	const screenVariant = {
		hidden: { opacity: 0, x: 100 },
		visible: { opacity: 1, x: 0 },
	};

	const cardVariant = {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section className={styles.home} id="home">
			<Wrapper className={styles.wrapper}>

				<div className={styles.contentContainer}>
					<AuroraBackground className={styles.auroraBg}>
					<div className={styles.lightBox}>
						<h1 className={styles.heroHeading}>
							<span className={styles.line1}>Tworzymy</span>
							<WordFlipper
									className={styles.line2}
									words={[
										"nowoczesne strony",
										"sklepy internetowe",
										"kreatywne projekty",
										"innowacyjne pomysły",
									]}
								/>
							<span className={styles.line3}>przynoszące sukces</span>
						</h1>

						<p className={styles.text}>
							<strong>Profesjonalne usługi web developmentu.</strong> Stworzymy
							dla Ciebie efektywną stronę internetową, która przyciągnie
							klientów.
						</p>

						<ul className={styles.featureList}>
							<li className={styles.featureItem}>
								<Icon icon="solar:arrow-right-broken" />
								<p>
									<strong>Indywidualny Projekt</strong>
								</p>
							</li>

							<li className={styles.featureItem}>
								<Icon icon="solar:arrow-right-broken" />
								<p>
									<strong>Intuicyjny CMS</strong>
								</p>
							</li>

							<li className={styles.featureItem}>
								<Icon icon="solar:arrow-right-broken" />
								<p>
									<strong>Konkurencyjna Oferta</strong>
								</p>
							</li>
						</ul>

						<a href="/" className={styles.ctaBtn}>
							Skorzystaj z oferty
						</a>
					</div>
					</AuroraBackground>

					<div className={styles.darkBox}>
						<motion.img
							className={styles.screenImg}
							src={breakpoint.sm ? screen_big : screen_small}
							ref={screenRef}
							alt="various layout photo"
							variants={screenVariant}
							initial={{ x: 150, opacity: 0 }}
							animate={screenInView ? "visible" : "hidden"}
							transition={{ duration: 1, delay: 0.5 }}
						/>
						<img className={styles.rocketImg} src={rocketImg} alt="" />
						<img className={styles.arrowImg} src={risingArrowImg} alt="" />

						<h2 className={styles.heading}>
							<span className={styles.line1}>Przenieś swój biznes</span>
							<span className={styles.line2}>na wyższy poziom.</span>
						</h2>

						<div className={styles.cardsContainer}>
							<motion.div
								className={styles.techCard}
								ref={cardRef}
								variants={cardVariant}
								initial={{ y: 100, opacity: 0 }}
								animate={cardInView ? "visible" : "hidden"}
								transition={{ duration: 0.5 }}>
								<p>
									Budujemy nowoczesne projekty z wykorzystaniem najnowszych
									technologii.
								</p>

								<div className={styles.iconBox}>
									<img src={tech1} alt="icon of technology" />
									<img src={tech2} alt="icon of technology" />
									<img src={tech3} alt="icon of technology" />
								</div>
							</motion.div>
							<ReviewSwiper className={styles.reviewsCard}/>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
