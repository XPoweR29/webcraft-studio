import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
	id: string;
	className: string;
	onVisible: (id: string) => void;
	children: React.ReactNode;
}

export const ScrollSpySection = ({id, className, onVisible, children,}: Props) => {
	const { ref, inView } = useInView({
		threshold: 0.6,
		triggerOnce: false,
	});

	useEffect(() => {
		if (inView) onVisible(id);
	}, [inView, id, onVisible]);

	return (
		<section className={className} id={id} ref={ref}>
			{children}
		</section>
	);
};
