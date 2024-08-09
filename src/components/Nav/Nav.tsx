import logo from "../../assets/images/logo_dark.png";
import styles from "./Nav.module.scss";

export const Nav = () => {
	return (
		<nav className={styles.nav}>
			<img className={styles.logo} src={logo} alt="logo WebCraft STUDIO" />

			<ul>
				<li>Start</li>
				<li>O nas</li>
				<li>Projekty</li>
			</ul>
		</nav>
	);
};
