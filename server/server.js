import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import getLocationByIp from "./getLocationByIP.js";

dotenv.config();
const server = express();

const env = process.env.NODE_ENV || "development";

const API_geo_url = "https://api.geoapify.com/v1/geocode/autocomplete";
const API_geo_key = String(process.env.GEO_KEY);
const API_weather_url = "https://api.weatherapi.com/v1";
let API_weather_key = String(process.env.WEATHER_KEY);
let corsSetting;

if (env == "production") {
	API_weather_key = String(process.env.WEATHER_KEY);
	corsSetting = { origin: "https://goodweather.vercel.app" };
} else {
	API_weather_key = String(process.env.WEATHER_KEY_DEV);
	corsSetting = "";
}

server.use(cors(corsSetting));
server.set("trust proxy", true);

server.get("/", (req, res) => {
	res.send("Welcome to Weather API server");
});
//Get cities info
server.get("/search", async (req, res) => {
	const { value } = req.query;
	if (!value) {
		return res.status(400).json({ error: "Query is required" });
	}
	try {
		const response = await fetch(`${API_geo_url}?apiKey=${API_geo_key}&lang=en&limit=10&text=${value}&type=city`, {
			method: "GET",
		});
		if (!response.ok) {
			const errorText = await response.text(); // Get error text
			throw new Error(`API error: ${response.status} - ${errorText}`);
		}
		const data = await response.json();

		const responseData = data.features.map((elem) => {
			return {
				name: elem.properties.formatted,
				// country: elem.properties.country,
				// region: elem.properties.region,
				lat: elem.properties.lat,
				lon: elem.properties.lon,
			};
		});
		res.json(responseData);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error geo API request" });
	}
});

//Get current weather
server.get("/getweather", getLocationByIp, async (req, res) => {
	const { lat, lon } = req.query;
	let currentLat;
	let currentLon;
	if (!lat || !lon) {
		currentLat = req.lat;
		currentLon = req.lon;
	} else {
		currentLat = lat;
		currentLon = lon;
	}

	try {
		const response = await fetch(`${API_weather_url}/forecast.json?key=${API_weather_key}&q=${currentLat},${currentLon}&days=7&lang=en`, {
			method: "GET",
		});
		if (!response.ok) {
			const errorText = await response.text(); // Get error text
			throw new Error(`API error: ${response.status} - ${errorText}`);
		}
		const data = await response.json();
		// const responseData = await data.current;
		res.json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error weather API request" });
	}
});

//Static images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
server.use("/images", express.static(path.join(__dirname, "../public/images")));

if (env == "production") {
	const PORT = process.env.PORT || 3001;
	server.listen(PORT, "0.0.0.0", () => console.log(`✅ Server running on port ${PORT}`));
} else {
	const PORT = process.env.PORT || 5000;
	server.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}
