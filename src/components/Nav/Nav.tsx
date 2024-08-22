import { useContext, useEffect, useState } from "react";
import { navLinks } from "../../assets/data/navigation_links";
import logo from "../../assets/images/logo_dark.png";
import { Wrapper } from "../Wrapper/Wrapper";
import styles from "./Nav.module.scss";
import { AppContext } from "../../contexts/AppContext";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { useNavHandling } from "../../hooks/useNavHandling";

export const Nav = () => {
	const { breakpoint } = useBreakpoints();
	const { visibleSection } = useContext(AppContext)!;
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [showNav, setShowNav] = useState(true);
	const {handleNavClick, scrollUp} = useNavHandling();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (prevScrollPos > currentScrollPos) {
				setShowNav(true);
			} else {
				setShowNav(false);
			}

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	return (
		<nav
			className={`${styles.nav} ${
				breakpoint.lg && (!showNav ? styles["nav--hidden"] : "")
			}`}>
			<Wrapper className={styles.wrapper}>
				<a  href="/"
					onClick={scrollUp}
				>
					<img className={styles.logo} src={logo} alt="logo WebCraft STUDIO" />
				</a>

				{breakpoint.lg && (
					<ul className={styles.linksBar}>
						{navLinks.map(({ name, href, id }, index) => (
							<li key={index}>
								<a
									className={`${styles.link} ${
										visibleSection === id ? styles["link--active"] : ""
									}`}
									href={href}
									onClick={(e) => handleNavClick(e, id)}
									>
									{name}
								</a>
							</li>
						))}
					</ul>
				)}
			</Wrapper>
		</nav>
	);
};
