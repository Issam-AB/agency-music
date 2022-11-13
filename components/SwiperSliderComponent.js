import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import imageSlider1 from "../images/imageSlider1.png";
import imageSlider2 from "../images/imageSlider2.png";
import imageSlider3 from "../images/imageSlider3.png";
import imageSlider4 from "../images/imageSlider4.png";
import imageSlider5 from "../images/imageSlider5.png";
import imageSlider6 from "../images/imageSlider6.png";

const SwiperSliderComponent = () => {
	const [slides, setSlides] = useState(0);
	useEffect(() => {
		let w = window.innerWidth;
		w < 768 ? setSlides(1.2) : setSlides(1.5);
	}, []);
	return (
		<div className="relative">
			<Swiper spaceBetween={50} slidesPerView={slides} grabCursor={true} className="w-full font-neutralFace h-[65vh]">

			</Swiper>
		</div>
	);
};

export default SwiperSliderComponent;
