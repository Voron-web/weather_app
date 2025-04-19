import Header from "./components/Header";
import "./styles/App.css";
import React, { useEffect, useState } from "react";
import { useWeather } from "./context/WeatherProvider";
import { useIsLoad } from "./context/IsLoadProvider";
import getCityByIp from "./services/fetchIp";
import { getWeatherData } from "./services/fetchWeather";
import TodayWeather from "./components/blocks/TodayWeather";
import Background from "./components/Background";
import Humidity from "./components/blocks/Humidity";
import Pressure from "./components/blocks/Pressure";
import Wind from "./components/blocks/Wind";
import Hourly from "./components/blocks/Hourly";
import Forecast from "./components/blocks/Forecast";

function App() {
	const [citySetting, setCitySetting] = useState({ name: "", lat: "", lon: "" });
	const { weatherData, setWeatherData } = useWeather();
	const { isLoad, setIsLoad } = useIsLoad();

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
			setIsLoad(false);
			getWeatherData(citySetting.lat, citySetting.lon).then((data) => {
				console.log(data);
				if (data) {
					setWeatherData(data);
					setIsLoad(true);
				}
			});
		}
	}, [citySetting]);

	return (
		<>
			<Background weatherCode={weatherData?.current?.condition?.code || 0} />
			<Header setCityData={setCitySetting} cityName={citySetting.name} />
			<main>
				<div className="content">
					<TodayWeather />
					<Humidity />
					<Pressure />
					<Wind />
					<Forecast />
					<Hourly />
				</div>
			</main>
		</>
	);
}

export default App;
