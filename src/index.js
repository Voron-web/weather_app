import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { WeatherProvider } from "./context/WeatherProvider";
import { IsLoadProvider } from "./context/IsLoadProvider";
import { initGA, logPageView } from "./services/analitics";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<IsLoadProvider>
		<WeatherProvider>
			<App />
		</WeatherProvider>
	</IsLoadProvider>
	// </React.StrictMode>
);
