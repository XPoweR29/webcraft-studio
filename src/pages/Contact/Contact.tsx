import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import phoneIcon from "../../assets/icons/contact_phone.svg";
import emailIcon from "../../assets/icons/contact_envelope.svg";
import contactImg from "../../assets/images/contactImg.webp";
import paperPlane from "../../assets/images/paper_plane.svg";
import styles from "./Contact.module.scss";

export const Contact = () => {
	return (
		<section id="section" className={styles.contact}>
			<Wrapper className={styles.wrapper}>
				<img src={paperPlane} className={styles.paperPlane} alt="" />

				<h2 className={styles.heading}>
					Gotowy na sukces? Zacznijmy współpracę!
				</h2>
				<p className={styles.text}>
					Chcesz rozwijać swoją firmę i potrzebujesz wsparcia w zakresie
					<strong> tworzenia stron internetowych</strong>? Skontaktuj się z
					nami, aby omówić szczegóły i rozpocząć współpracę. Jesteśmy tutaj, aby
					pomóc Ci osiągnąć Twoje cele.
				</p>

				<div className={styles.container}>
					<ContactForm />

					<div className={styles["info-img_wrapper"]}>
						<div className={styles.contactInfoContainer}>
							<a className={styles.link} href="tel:+48505264517">
								<img src={phoneIcon} className={styles.icon} alt="phone icon" />
								<div className={styles.info}>
									<p className={styles.title}>Zadzwoń</p>
									<p className={styles.value}>+48 505 264 517</p>
								</div>
							</a>
							<a
								className={styles.link}
								href="mailto:kontakt@webcraft-studio.pl">
								<img
									src={emailIcon}
									className={styles.icon}
									alt="envelope icon"
								/>
								<div className={styles.info}>
									<p className={styles.title}>Wyślij e-mail</p>
									<p className={styles.value}>kontakt@webcraft-studio.pl</p>
								</div>
							</a>
						</div>

						<img
							src={contactImg}
							className={styles.contactImg}
							alt="websites"
						/>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
