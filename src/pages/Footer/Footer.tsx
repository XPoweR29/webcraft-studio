import logo from "../../assets/images/logo_light.png";
import { useNavHandling } from "../../hooks/useNavHandling";
import styles from "./Footer.module.scss";

export const Footer = () => {
	const {scrollUp} = useNavHandling();

	return (
		<footer className={styles.footer}>
			<a href="/" onClick={scrollUp} >
				<img src={logo} alt="logo webcraft-studio" />
			</a>
			<p className={styles.text}>
				© WebCraft STUDIO | Wszelkie prawa zastrzeżone{" "}
			</p>
		</footer>
	);
};
