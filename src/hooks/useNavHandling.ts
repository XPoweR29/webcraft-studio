export const useNavHandling = () => {

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			history.pushState(null, "", `/${id}`);
		}
	};

	const scrollUp = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		window.scrollTo({top: 0, behavior: "smooth"});
		history.pushState(null, "", "/");
	};

	return {handleNavClick, scrollUp};
};
