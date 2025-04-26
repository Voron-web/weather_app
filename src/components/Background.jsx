import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { weatherGroupMap } from "../services/weatherCode";
import "../styles/Background.css";
import { useWeather } from "../context/WeatherProvider";

const Background = () => {
	const [isFlashActive, setIsFlashActive] = useState(false);
	const staticImage = "url('/images/main.jpeg')";
	const [bg, setBg] = useState(staticImage);
	const { weatherData } = useWeather();

	useEffect(() => {
		if (weatherGroupMap[weatherData?.current?.condition?.code]) {
			setIsFlashActive(true);
			setTimeout(() => {
				const newBg = `url('/images/${weatherData?.current?.is_day ? "day" : "night"}/${
					weatherGroupMap[weatherData?.current?.condition?.code].group
				}.jpeg')`;
				setBg(newBg);
			}, 1000);
			setTimeout(() => setIsFlashActive(false), 5000);
		}
	}, [weatherData]);

	return createPortal(
		<div className={isFlashActive ? "wrapper flash" : "wrapper"} style={{ backgroundImage: bg, backgroundSize: "cover" }}>
			<div className={isFlashActive ? "dark_flash active" : "dark_flash"}></div>
		</div>,
		document.getElementById("portal-bg")
	);
};

export default Background;
