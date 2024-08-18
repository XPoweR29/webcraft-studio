import aboutImg_small from "../../assets/images/aboutImg_small.webp";
import aboutImg_big from "../../assets/images/aboutImg_big.webp";
import arrowDraw from "../../assets/images/arrow_draw.svg";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import styles from "./About.module.scss";
import { ScrollSpySection } from "../../components/ScrollSpySection/ScrollSpySection";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

export const About = () => {
	const {setVisibleSection} = useContext(AppContext)!;
	const { breakpoint } = useBreakpoints();

	return (
		<ScrollSpySection id="about" className={styles.about} onVisible={() => setVisibleSection("about")}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.container}>
					<img
						src={!breakpoint.sm ? aboutImg_small : aboutImg_big}
						className={styles.aboutImg}
						alt="webpages images"
					/>

					<div className={styles.content}>
						<h2 className={styles.heading}>
							Projektujemy i budujemy strony, które wyróżnią Cię w sieci!
						</h2>

						<div className={styles.text}>
							<p>
								Jako freelancer specjalizuję się w tworzeniu{" "}
								<strong>stron internetowych i sklepów online.</strong> Pomagam
								firmom wyróżnić się w sieci dzięki estetycznym, funkcjonalnym i
								zoptymalizowanym stronom. Oferuję pełen zakres usług, od
								projektowania po wdrożenie i wsparcie techniczne.
							</p>
							<p>
								Dzięki mojej wiedzy i doświadczeniu dostarczam rozwiązania
								idealnie dopasowane do potrzeb każdego klienta. Każda realizacja
								nie tylko wygląda atrakcyjnie, ale także{" "}
								<strong>wspiera rozwój biznesu</strong>.
							</p>
							<p>
								Moje zaangażowanie i świeże podejście do każdego projektu
								gwarantują <strong>najwyższą jakość usług</strong>. Tworzę{" "}
								<strong>unikalne strony</strong>, dostosowane do indywidualnych
								wymagań.
							</p>
						</div>

						<div className={styles.subHeading}>
							<h3 className={styles.subHeading}>
								Pokaż się online i rozwijaj swój biznes!
							</h3>
							<img src={arrowDraw} className={styles.arrowDraw} alt="" />
						</div>
					</div>
				</div>

				<div className={styles.ctaSection}>
					<p className={styles.ctaText}>
						Masz pomysł na stonę?
						<br /> Pomożemy Ci go zrealizować. Skontaktuj się z nami.
					</p>
					<a href="#contact" className={styles.ctaBtn}>
						Uzyskaj ofetrę
					</a>
				</div>
			</Wrapper>
		</ScrollSpySection>
	);
};
