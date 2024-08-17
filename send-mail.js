import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
	to: "example@email.com", // Change to your recipient
	from: "example@email.com", // Change to your verified sender
	subject: "Zapytanie o wycenę",
	text: "and easy to do anywhere, even with Node.js",
	html: "<p>This is text message!</p>",
};

console.log("Klucz API:", process.env.SENDGRID_API_KEY);
console.log("Wiadomość do wysłania:", msg);

sgMail
	.send(msg)
	.then(() => {
		console.log("Email sent");
	})
	.catch((error) => {
		console.error(error);
	});
