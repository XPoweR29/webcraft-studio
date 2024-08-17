import {useRef} from "react";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import phoneIcon from "../../assets/icons/contact_phone.svg";
import emailIcon from "../../assets/icons/contact_envelope.svg";
import contactImg from "../../assets/images/contactImg.webp";
import paperPlane from "../../assets/images/paper_plane.svg";
import { motion, useInView } from "framer-motion";
import styles from "./Contact.module.scss";

export const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

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
							<motion.a
							ref={ref}
								className={styles.link}
								href="tel:+48505264517"
								initial={{ opacity: 0, y: 50 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, type: "spring", stiffness: 80 }}>
								<img src={phoneIcon} className={styles.icon} alt="phone icon" />
								<div className={styles.info}>
									<p className={styles.title}>Zadzwoń</p>
									<p className={styles.value}>+48 505 264 517</p>
								</div>
							</motion.a>
							<motion.a
							ref={ref}
								className={styles.link}
								href="mailto:kontakt@webcraft-studio.pl"
								initial={{ opacity: 0, y: 50 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{
									duration: 0.8,
									delay: 0.2,
									type: "spring",
									stiffness: 80,
								}}>
								<img
									src={emailIcon}
									className={styles.icon}
									alt="envelope icon"
								/>
								<div className={styles.info}>
									<p className={styles.title}>Wyślij e-mail</p>
									<p className={styles.value}>kontakt@webcraft-studio.pl</p>
								</div>
							</motion.a>
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
