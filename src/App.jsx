import Header from "./components/Header";
import "./styles/App.css";
import React, { useEffect } from "react";
import { useWeather } from "./context/WeatherProvider";
import { useIsLoad } from "./context/IsLoadProvider";
// import getCityByIp from "./services/fetchIp";
import { getWeatherData } from "./services/fetchWeather";
import TodayWeather from "./components/blocks/TodayWeather";
import Background from "./components/Background";
import Humidity from "./components/blocks/Humidity";
import Pressure from "./components/blocks/Pressure";
import Wind from "./components/blocks/Wind";
import Hourly from "./components/blocks/Hourly";
import Forecast from "./components/blocks/Forecast";
import { initGA, logPageView } from "./services/analitics";
import { useLocation } from "react-router-dom";
import Seo from "./components/services/Seo";

function App() {
	// const [citySetting, setCitySetting] = useState({ name: "", lat: "", lon: "" });
	const { weatherData, setWeatherData } = useWeather();
	const { setIsLoad } = useIsLoad();
	const location = useLocation();

	useEffect(() => {
		initGA();
	}, []);
	useEffect(() => {
		logPageView(location.pathname + location.search);
	}, [location]);

	// useEffect(() => {
	// 	getCityByIp().then((data) => {
	// 		if (data) {
	// 			setCitySetting(data);
	// 		} else {
	// 			setCitySetting({ name: "New York", lat: 40.71, lon: -74.0 });
	// 		}
	// 	});
	// }, []);

	/* eslint-disable react-hooks/exhaustive-deps */
	function refreshWeather(lat, lon) {
		setIsLoad(false);
		getWeatherData(lat, lon).then((data) => {
			console.log(data);
			if (data) {
				setWeatherData(data);
				setIsLoad(true);
			}
		});
	}

	useEffect(() => {
		refreshWeather();
	}, []);

	return (
		<>
			<Seo />
			<Background weatherCode={weatherData?.current?.condition?.code || 0} />
			<Header refreshWeather={refreshWeather} />
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
