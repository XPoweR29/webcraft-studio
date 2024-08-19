interface Breakpoints {
	/** Small breakpoint (>= 576px) */
	sm: boolean;
	/** Medium breakpoint (>= 768px) */
	md: boolean;
	/** Large breakpoint (>= 992px) */
	lg: boolean;
	/** Extra large breakpoint (>= 1200px) */
	xl: boolean;
	/** Extra extra large breakpoint (>= 1400px) */
	xxl: boolean;
}

interface AppContextType {
	breakpoint: Breakpoints;
	visibleSection: string;
	setVisibleSection: React.Dispatch<React.SetStateAction<string>>;
}

export type Review = {
	author: string;
	comment: string;
};

interface NavLink {
	name: string;
	href: string;
	id: string;
}

interface Feature {
	icon: string;
	title: string;
	description: string;
}

interface Project {
	thumbnail: string;
	title: string;
	previewUrl: string;
}

type FAQType = {
	question: string;
	answer: string;
};
interface FormData {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}
