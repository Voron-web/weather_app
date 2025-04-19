import React, { useEffect, useState } from "react";
import "../../styles/TodayWeather.css";
import Preloader from "../services/Preloader";
import getWeatherIcon from "../../services/weatherCode";
import { useWeather } from "../../context/WeatherProvider";
import { useIsLoad } from "../../context/IsLoadProvider";

const TodayWeather = () => {
	const [currentIcon, setCurrentIcon] = useState("");

	const { weatherData } = useWeather();
	const { isLoad } = useIsLoad();

	// create Date object from epoch time
	const currentDate = new Date(weatherData?.location?.localtime_epoch * 1000);

	useEffect(() => {
		if (isLoad) {
			setCurrentIcon(getWeatherIcon(weatherData?.current?.condition?.code, weatherData?.current?.is_day));
		}
	}, [weatherData]);
	return (
		<div className="current_weather">
			<div>
				<div className="current_condition">
					{isLoad ? (
						weatherData?.current?.condition?.text
					) : (
						<div style={{ width: "30px" }}>
							<Preloader />
						</div>
					)}
				</div>
				<div className="current_temp">
					{isLoad ? (
						Math.round(Number(weatherData?.current?.temp_c))
					) : (
						<div style={{ width: "100px" }}>
							<Preloader />
						</div>
					)}
					&deg;C
				</div>
				<div className="date_now">
					{isLoad ? <span>{currentDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span> : ""}
				</div>
			</div>
			{isLoad ? (
				<svg className="icon">
					<use xlinkHref={`./images/icon_sprite.svg#${currentIcon}`} />
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
