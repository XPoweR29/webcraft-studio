import { useContext } from "react";
import { features } from "../../assets/data/features";
import { FeatureItem } from "../../components/Feature/FeaatureItem";
import { ScrollSpySection } from "../../components/ScrollSpySection/ScrollSpySection";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { AppContext } from "../../contexts/AppContext";
import styles from "./Offer.module.scss";

export const Offer = () => {
	const { setVisibleSection } = useContext(AppContext)!;

	return (
		<ScrollSpySection id="nasza-oferta" className={styles.offer} onVisible={()=>setVisibleSection("nasza-oferta")}>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>
					Kompleksowe rozwiązania Web Developmentu dla Twojej firmy.
				</h2>
				<p className={styles.text}>
					Oferujemy kompleksowe usługi web developmentu, które obejmują{" "}
					<strong>
						projektowanie stron internetowych, tworzenie sklepów online,
						optymalizację SEO
					</strong>{" "}
					oraz wsparcie techniczne. Korzystając z naszych usług, zyskujesz
					nowoczesne, <strong>funkcjonalne i zoptymalizowane strony</strong>,
					które przyciągną klientów i wspomogą rozwój Twojego biznesu. Nasze
					rozwiązania są dostosowane do indywidualnych potrzeb klientów,
					gwarantując najwyższą jakość i skuteczność.
				</p>

				<div className={styles.featureContainer}>
					{features.map(({icon, description, title}) => (
						<FeatureItem icon={icon} title={title} description={description} key={icon}/>
					))}
				</div>
			</Wrapper>
		</ScrollSpySection>
	);
};
