import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import weatherGroupMap from "../services/weatherCode";
import "../styles/Background.css";

const Background = ({ isDay = true, weatherCode = 0 }) => {
	const [isFlashActive, setIsFlashActive] = useState(false);
	// const staticImage = "url('http://localhost:5000/images/main.jpeg')";
	const staticImage = "url('/images/main.jpeg')";
	let [bg, setBg] = useState(staticImage);

	useEffect(() => {
		function changeBg() {
			if (weatherGroupMap[weatherCode]) {
				setIsFlashActive(true);
				setTimeout(() => {
					const newBg = `url('http://localhost:5000/images/${isDay ? "day" : "night"}/${weatherGroupMap[weatherCode].group}.jpeg')`;
					setBg(newBg);
				}, 1000);
				setTimeout(() => setIsFlashActive(false), 5000);
			}
		}
		changeBg();
	}, [weatherCode, isDay]);

	return createPortal(
		<div className={isFlashActive ? "wrapper flash" : "wrapper"} style={{ backgroundImage: bg, backgroundSize: "cover" }}>
			<div className={isFlashActive ? "dark_flash active" : "dark_flash"}></div>
		</div>,
		document.getElementById("portal-bg")
	);
};

export default Background;
