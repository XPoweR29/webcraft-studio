import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./ContactForm.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FormData } from "../../types/types";
import { validateForm } from "../../utils/formValidation";
import toast from "react-hot-toast";

export const ContactForm: React.FC = () => {
	const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});

		setErrors((prev) => ({...prev, [name]: null}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {

			if(!validateForm(formData, setErrors)) {
				throw new Error("Błąd walidacji danych formularza");
			}

			const response = await fetch("https://backendapp-gamma.vercel.app/api/send-mail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if(response.ok) {
				toast.success("Twoja wiadomość została wysłana", {
					duration: 5000,
					position: "bottom-right",

				});

				setFormData({
					name: "",
					email: "",
					phone: "",
					subject: "",
					message: "",
				});
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
				<p className={`${styles.error} ${errors.name&&styles["error--active"]}`}>{errors.name}</p>
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
				<p className={`${styles.error} ${errors.email&&styles["error--active"]}`}>{errors.email}</p>

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
				<p className={`${styles.error} ${errors.phone&&styles["error--active"]}`}>{errors.phone}</p>

			</div>

			<div className={styles.formInput}>
				<label htmlFor="subject">Temat</label>
				<input
					type="text"
					id="subject"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					required
				/>
				<p className={`${styles.error} ${errors.subject&&styles["error--active"]}`}>{errors.subject}</p>

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
				<p className={`${styles.error} ${errors.message&&styles["error--active"]}`}>{errors.message}</p>
			</div>

			<div className={styles.formInput}>
				<label className={styles.checkboxContainer}>
					<input
						type="checkbox"
						name="consent"
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
