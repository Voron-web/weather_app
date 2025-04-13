import React, { useEffect, useState } from "react";
import "../../styles/TodayWeather.css";
import Preloader from "../services/Preloader";
import weatherGroupMap from "../../services/weatherCode";

const TodayWeather = ({ condition, currTemp, tempUnit = "C", isDay = 1, conditionCode = 1000, isLoad }) => {
	const [currentIcon, setCurrentIcon] = useState("");

	useEffect(() => {
		const icon = weatherGroupMap[conditionCode][`${isDay ? "dayIcon" : "nightIcon"}`];
		setCurrentIcon(icon);
	}, [isDay, conditionCode]);
	return (
		<div className="current_weather">
			<div>
				<div className="current_condition">
					{isLoad ? (
						condition
					) : (
						<div style={{ width: "30px" }}>
							<Preloader />
						</div>
					)}
				</div>
				<div className="current_temp">
					{isLoad ? (
						Math.round(Number(currTemp))
					) : (
						<div style={{ width: "100px" }}>
							<Preloader />
						</div>
					)}
					&deg;{tempUnit}
				</div>
			</div>
			{isLoad ? (
				<svg className="icon">
					{/* <use xlinkHref={`./images/icon_sprite.svg#${currentIcon}`} /> */}
					<use xlinkHref={`./images/icon_sprite.svg#partly_cloudy`} />
				</svg>
			) : (
				<div style={{ width: "150px" }}>
					<Preloader />
				</div>
			)}
		</div>
	);
};

export default TodayWeather;
