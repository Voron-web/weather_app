import Header from "./components/Header";
import "./styles/App.css";
import React, { useEffect, useState } from "react";
import getCityByIp from "./services/fetchIp";
import TodayWeather from "./components/blocks/TodayWeather";
import Background from "./components/Background";
import Humidity from "./components/blocks/Humidity";
import Pressure from "./components/blocks/Pressure";
import Wind from "./components/blocks/Wind";
import { getCurrentWeather } from "./services/fetchWeather";

function App() {
	const [citySetting, setCitySetting] = useState({ name: "", lat: "", lon: "" });
	const [currentWeather, setCurrentWeather] = useState("");
	const [isDataLoad, setIsDataLoad] = useState(false);

	useEffect(() => {
		getCityByIp().then((data) => {
			if (data) {
				setCitySetting(data);
			} else {
				setCitySetting({ name: "New York", lat: 53.07, lon: -0.14 });
			}
		});
	}, []);

	useEffect(() => {
		if (citySetting.lat !== "") {
			setIsDataLoad(false);
			getCurrentWeather(citySetting.lat, citySetting.lon).then((data) => {
				console.log(data);
				if (data) {
					setCurrentWeather(data);
					setIsDataLoad(true);
				}
			});
		}
	}, [citySetting]);

	return (
		<>
			<Background weatherCode={currentWeather?.condition?.code || 0} />
			<Header setCityData={setCitySetting} cityName={citySetting.name} />
			<main>
				<div className="content">
					<TodayWeather
						condition={currentWeather !== "" ? currentWeather.condition.text : ""}
						currTemp={currentWeather.temp_c}
						conditionCode={currentWeather?.condition?.code}
						isDay={currentWeather.is_day}
						isLoad={isDataLoad}
					/>
					<Humidity humidityAir={currentWeather?.humidity} precipitation={currentWeather?.precip_mm} isLoad={isDataLoad} />
					<Pressure pressure={currentWeather.pressure_in} isLoad={isDataLoad} />
					<Wind
						windSpeed={currentWeather.wind_kph}
						windGusts={currentWeather.gust_kph}
						windDegree={currentWeather.wind_degree}
						windDir={currentWeather.wind_dir}
						windSpeedUnit="km/h"
					/>
				</div>
			</main>
		</>
	);
}

export default App;
