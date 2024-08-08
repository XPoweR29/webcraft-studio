import React, { useEffect, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import styles from "./SwipperButtons.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
//NOTE: Opisanie tworzenia customowych przycisków swipera.

interface Props {
	swiperRef: React.MutableRefObject<SwiperType | null>;
	className?: string;
	disableControl?: boolean;
}
// otrzymywanie w propsie referencji swipera który ma być obsługiwany przez przyciski
export const SwiperButtons = ({
	swiperRef,
	className,
	disableControl = true,
}: Props) => {
	//OBSŁUGA AKTYWNYCH PRZYCISKÓW SWIPERA
	//zmienne dla stanów początku i końca swipera
	const [slideStart, setSlideStart] = useState(true);
	const [slideEnd, setSlideEnd] = useState(false);

	useEffect(() => {
		//funckcja monitorująca stan swipera
		const currentSwiper = swiperRef.current;
		const checkSlideState = () => {
			if (currentSwiper) {
				setSlideStart(currentSwiper.isBeginning);
				setSlideEnd(currentSwiper.isEnd);
			}
		};
		//nasłuchowanie na zmianę slajdu
		currentSwiper?.on("slideChange", checkSlideState);

		//czyszczenie eventlistenera po odmontowaniu komponentu
		return () => {
			currentSwiper?.off("slideChange", checkSlideState);
		};
	}, [swiperRef]);

	return (
		<div className={`${styles.swiperBtns} ${className}`}>
			<button
				//nadanie klasy disabled w zależności od stanu swipera
				className={`${styles.prev} ${
					disableControl && slideStart ? styles.disabled : ""
				}`}
				// zdarzenie na klinięcie - zmiana slajdu dla referencji swipera.
				onClick={() => swiperRef.current?.slidePrev()}
				aria-label="Poprzedni slajd">
				<Icon icon="fluent:ios-arrow-left-24-filled" />
			</button>
			<button
				className={`${styles.next} ${
					disableControl && slideEnd ? styles.disabled : ""
				}`}
				onClick={() => swiperRef.current?.slideNext()}
				aria-label="Następny slajd">
				<Icon icon="fluent:ios-arrow-right-24-filled" />
			</button>
		</div>
	);
};
