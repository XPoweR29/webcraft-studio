import { CardBody, CardContainer, CardItem } from "../../utils/3d-card";
import styles from "./PerspectiveCard.module.scss";

interface Props {
	cardImage: string;
	title: string;
	previewUrl: string;
}

export function ThreeDCardDemo({
	cardImage,
	previewUrl,
	title,
}: Props) {
	return (
		<div className={styles.perspectiveCard}>
			<CardContainer className={styles.card}>
				<CardBody
					className={`${"bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border"} ${
						styles.cardBody
					}`}>
					<CardItem translateZ={50} className={styles.title}>
						{title}
					</CardItem>
					<CardItem translateZ={100} className="w-full mt-4">
						<img
							src={cardImage}
							height={1000}
							width={1000}
							className={styles.cardImage}
							alt="thumbnail"
						/>
					</CardItem>
					<div className={styles.previewBtn}>
						<a href={previewUrl} target="_blank" rel="noopener noreferrer">
							Zobacz →
						</a>
					</div>
				</CardBody>
			</CardContainer>
		</div>
	);
}
