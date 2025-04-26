import React from "react";
import "../../styles/TodayWeather.css";
import Preloader from "../services/Preloader";
import { useWeather } from "../../context/WeatherProvider";
import { useIsLoad } from "../../context/IsLoadProvider";
import IconWeather from "../services/IconWeather";

const TodayWeather = () => {
	const { weatherData } = useWeather();
	const { isLoad } = useIsLoad();

	// create Date object from epoch time
	const currentDate = new Date(weatherData?.location?.localtime_epoch * 1000);

	return (
		<div className="current_weather">
			<div>
				<div className="current_condition">{isLoad ? weatherData?.current?.condition?.text : <Preloader width={30} />}</div>
				<div className="current_temp">
					{isLoad ? Math.round(Number(weatherData?.current?.temp_c)) : <Preloader width={100} />}
					&deg;C
				</div>
				<div className="date_now">
					{isLoad ? <span>{currentDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span> : ""}
				</div>
			</div>
			{isLoad ? (
				<div className="icon">
					<IconWeather code={weatherData?.current?.condition?.code} isDay={weatherData?.current?.is_day} />
				</div>
			) : (
				<Preloader width={150} />
			)}
		</div>
	);
};

export default TodayWeather;
