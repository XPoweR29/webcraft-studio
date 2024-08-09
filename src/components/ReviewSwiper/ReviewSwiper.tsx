import { Swiper as SwiperClass } from "swiper";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import styles from "./ReviewSwiper.module.scss";
import { SwiperButtons } from "../SwipperBtns/SwipperButtons";
import comments from "../../assets/data/comments.json";
import { Review } from "../../types/types";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useBreakpoints } from "../../hooks/useBreakpoints";

interface Props {
	className?: string;
}

export const ReviewSwiper = ({className}: Props) => {
	const {breakpoint} = useBreakpoints();
	const ref = useRef(null);
	const swiperRef = useRef<SwiperClass | null>(null);
	const reviews: Review[] = comments;

	const inView = useInView(ref, {
		margin: `${breakpoint.lg?"-100px":"-50px"}`,
		once: true,
	});

	const variants = {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			className={`${styles.swiperContainer} ${className}`}
			ref={ref}
			variants={variants}
			initial={{ y: 100, opacity: 0 }}
			animate={inView ? "visible" : "hidden"}
			transition={{ duration: 0.5}}>

			<SwiperButtons
				className={styles.swiperBtns}
				swiperRef={swiperRef}
				disableControl={false}
			/>

			<Swiper
				className={styles.reviewSwiper}
				modules={[Scrollbar, A11y, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				autoplay={{
					delay: 5000,
				}}
				loop={true}
				onSwiper={(swiper) => (swiperRef.current = swiper)}>
				{reviews.map(({ author, comment }, index) => (
					<SwiperSlide key={index}>
						<p className={styles.comment}>„{comment}”</p>
						<span className={styles.author}>{author}</span>
					</SwiperSlide>
				))}
			</Swiper>
		</motion.div>
	);
};
