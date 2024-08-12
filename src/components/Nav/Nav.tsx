import { navLinks } from "../../assets/data/navigation_links";
import logo from "../../assets/images/logo_dark.png";
import styles from "./Nav.module.scss";

export const Nav = () => {
	return (
		<nav className={styles.nav}>
			<img className={styles.logo} src={logo} alt="logo WebCraft STUDIO" />

			<ul>
				{navLinks.map(({name, href}, index) => (
					<a href={href} key={index}>{name}</a>
				))}
			</ul>
		</nav>
	);
};
