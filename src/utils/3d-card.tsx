import React, {
	useState,
	useRef,
	useEffect,
	ReactNode,
	MouseEvent,
	ElementType,
	useCallback,
} from "react";
import { MouseEnterContext } from "../contexts/MouseEnterContext";
import { useMouseEnter } from "../hooks/useMouseEnter";

interface CardContainerProps {
	children?: ReactNode;
	className?: string;
	containerClassName?: string;
}

export const CardContainer: React.FC<CardContainerProps> = ({
	children,
	className,
	containerClassName,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMouseEntered, setIsMouseEntered] = useState(false);

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;
		const { left, top, width, height } =
			containerRef.current.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) / 15;
		const y = (e.clientY - top - height / 2) / 15;
		containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
	};

	const handleMouseEnter = () => {
		setIsMouseEntered(true);
	};

	const handleMouseLeave = () => {
		if (!containerRef.current) return;
		setIsMouseEntered(false);
		containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
	};

	return (
		<MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
			<div
				className={containerClassName}
				style={{
					perspective: "1000px",
				}}>
				<div
					ref={containerRef}
					onMouseEnter={handleMouseEnter}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className={className}
					style={{
						transformStyle: "preserve-3d",
						transition: "transform 0.1s ease-out",
					}}>
					{children}
				</div>
			</div>
		</MouseEnterContext.Provider>
	);
};

interface CardBodyProps {
	children: ReactNode;
	className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
	return (
		<div
			className={className}
			style={{
				transformStyle: "preserve-3d",
			}}>
			{children}
		</div>
	);
};

interface CardItemProps {
	as?: ElementType;
	children: ReactNode;
	className?: string;
	translateX?: number | string;
	translateY?: number | string;
	translateZ?: number | string;
	rotateX?: number | string;
	rotateY?: number | string;
	rotateZ?: number | string;
	[key: string]: unknown;
}

export const CardItem: React.FC<CardItemProps> = ({
	as: Tag = "div",
	children,
	className,
	translateX = 0,
	translateY = 0,
	translateZ = 0,
	rotateX = 0,
	rotateY = 0,
	rotateZ = 0,
	...rest
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isMouseEntered] = useMouseEnter();

	const handleAnimations = useCallback(() => {
		if (!ref.current) return;
		if (isMouseEntered) {
			ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
		} else {
			ref.current.style.transform = "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
		}
	}, [
		isMouseEntered,
		translateX,
		translateY,
		translateZ,
		rotateX,
		rotateY,
		rotateZ,
	]);

	useEffect(() => {
		handleAnimations();
	}, [isMouseEntered, handleAnimations]);

	return (
		<Tag
			ref={ref}
			className={className}
			{...rest}
			style={{ transition: "transform 0.3s ease-out" }}>
			{children}
		</Tag>
	);
};
