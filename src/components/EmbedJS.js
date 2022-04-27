import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize";
import { Swiper, SwiperSlide } from 'swiper/react'; // Put your JS here:

const customJs = `
	var message = document.createElement('div');
	message.style = "padding: 20px 40px";
	message.innerHTML = "Edit this widget on the Components's Panel";

	document.currentScript.parentElement.appendChild(message);
`;

const EmbedJS = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		const script = document.createElement("script");
		script.innerHTML = customJs;
		ref.current.appendChild(script);
	}, []);
	return <div {...props} ref={ref}>
		<Swiper spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={swiper => console.log(swiper)}>
			<SwiperSlide>
				Slide 1
			</SwiperSlide>
			<SwiperSlide>
				Slide 2
			</SwiperSlide>
			<SwiperSlide>
				Slide 3
			</SwiperSlide>
			<SwiperSlide>
				Slide 4
			</SwiperSlide>
		</Swiper>
	</div>;
};

export default atomize(EmbedJS)({
	name: "EmbedJS",
	normalize: true,
	mixins: true
});