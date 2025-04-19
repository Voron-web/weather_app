import React, { useState, createContext, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const [weatherData, setWeatherData] = useState(null);

	const contextValue = {
		weatherData,
		setWeatherData,
	};
	return <WeatherContext.Provider value={contextValue}>{children}</WeatherContext.Provider>;
};
// custom hook
export const useWeather = () => useContext(WeatherContext);
