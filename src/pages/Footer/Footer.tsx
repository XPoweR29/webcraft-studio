import logo from "../../assets/images/logo_light.png";
import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a href="/#">
				<img src={logo} alt="logo webcraft-studio" />
			</a>
			<p className={styles.text}>
				© WebCraft STUDIO | Wszelkie prawa zastrzeżone{" "}
			</p>
		</footer>
	);
};
