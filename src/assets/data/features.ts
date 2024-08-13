import { Feature } from "../../types/types";
import designIcon from "../icons/design_icon.svg";
import analyticsIcon from "../icons/analytics_icon.svg";
import domainIcon from "../icons/domain_icon.svg";
import responsiveIcon from "../icons/responsive_icon.svg";
import seoIcon from "../icons/seo_icon.svg";
import supportIcon from "../icons/support_icon.svg";

export const features: Feature[] = [
	{
		icon: designIcon,
		title: "Unikalny design",
		description:
			"Tworzymy estetyczne i funkcjonalne strony internetowe, które wyróżniają się na tle konkurencji. Nasze projekty są jedyne w swoim rodzaju i zapadają w pamięć.",
	},
	{
		icon: responsiveIcon,
		title: "Responsywne strony",
		description:
			"Zapewniamy pełną responsywność stron, które działają bezproblemowo na wszystkich urządzeniach. Twoja strona będzie wyglądać świetnie na każdym ekranie.",
	},
	{
		icon: domainIcon,
		title: "Domena i hosting",
		description:
			"Pomagamy w rejestracji domeny i zapewniamy niezawodny hosting, aby Twoja strona była zawsze dostępna online. Bezpieczeństwo i niezawodność to nasze priorytety.",
	},
	{
		icon: seoIcon,
		title: "Optymalizacja SEO",
		description:
			"Poprawiamy widoczność strony w wynikach wyszukiwania dzięki skutecznej optymalizacji SEO. Zwiększ swój zasięg i przyciągnij więcej klientów.",
	},
	{
		icon: analyticsIcon,
		title: "Analityka i monitoring",
		description:
			"Śledzimy ruch na stronie i dostarczamy szczegółowe raporty, aby pomóc w podejmowaniu świadomych decyzji. Monitoruj swoje wyniki i rozwijaj biznes w oparciu o dane.",
	},
	{
		icon: supportIcon,
		title: "Wsparcie techniczne",
		description:
			"Oferujemy wsparcie techniczne i utrzymanie, aby Twoja strona działała bez przerw i była zawsze aktualna. Zawsze możesz na nas liczyć w razie problemów.",
	},
];
