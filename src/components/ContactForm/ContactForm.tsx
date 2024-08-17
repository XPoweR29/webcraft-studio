import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./ContactForm.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FormData } from "../../types/types";

export const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
		consent: false,
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value, type } = e.target;
		const checked = (e.target as HTMLInputElement).checked;

		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await fetch("/send-mail.js", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(formData),
			});

			if(response.ok) {
				/* eslint-disable no-console */
				console.log("Twoja wiadomosć została poprawnie wysłana.");
			}

		} catch(err) {
			console.error(err);

		}
	};

	return (
		<form className={styles.contactForm} onSubmit={handleSubmit}>
			<div className={styles.formInput}>
				<label htmlFor="name">Imię i nazwisko</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>

			<div className={styles.formInput}>
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>

			<div className={styles.formInput}>
				<label htmlFor="phone">Telefon</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					required
				/>
			</div>

			<div className={styles.formInput}>
				<label htmlFor="subject">Temat zapytania</label>
				<input
					type="text"
					id="subject"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					required
				/>
			</div>

			<div className={`${styles.formInput} ${styles["formInput--message"]}`}>
				<label htmlFor="message">Wiadomość</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
				/>
			</div>

			<div className={styles.formInput}>
				<label className={styles.checkboxContainer}>
					<input
						type="checkbox"
						name="consent"
						checked={formData.consent}
						onChange={handleChange}
						required
					/>
					<p className={styles.checkboxLabel}>
						Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi
						zapytania. Podanie danych osobowych jest dobrowolne.
					</p>
				</label>
			</div>

			<button type="submit" className={styles.submitButton}>
				Wyślij <Icon className={styles.icon} icon="mingcute:send-fill" />
			</button>
		</form>
	);
};
