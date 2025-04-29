import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
import https from "https";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import getLocationByIp from "./getLocationByIP.js";

dotenv.config();
const server = express();

server.use(cors({ origin: "https://goodweather.vercel.app/" }));
// server.use(cors());

const API_geo_url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const API_geo_key = String(process.env.GEO_KEY);
const API_weather_url = "https://api.weatherapi.com/v1";
const API_weather_key = String(process.env.WEATHER_KEY);
const sslOptions = {
	key: fs.readFileSync("/etc/letsencrypt/live/voron-vps.space/privkey.pem"),
	cert: fs.readFileSync("/etc/letsencrypt/live/voron-vps.space/fullchain.pem"),
};

//Get cities info
server.get("/search", async (req, res) => {
	const { value } = req.query;
	if (!value) {
		return res.status(400).json({ error: "Query is required" });
	}
	try {
		const response = await fetch(`${API_geo_url}?limit=10&namePrefix=${value}`, {
			method: "GET",
			headers: {
				"x-rapidapi-key": API_geo_key,
				"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
			},
		});
		if (!response.ok) {
			const errorText = await response.text(); // Get error text
			throw new Error(`API error: ${response.status} - ${errorText}`);
		}
		const data = await response.json();

		const responseData = data.data.map((elem) => {
			return { name: elem.city, country: elem.country, region: elem.region, lat: elem.latitude, lon: elem.longitude };
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
		// return res.status(400).json({ error: "Query is required" });
	} else {
		currentLat = lat;
		currentLon = lon;
	}

	try {
		const response = await fetch(`${API_weather_url}/forecast.json?key=${API_weather_key}&q=${currentLat},${currentLon}&days=7`, {
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
// console.log(__dirname);

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

https.createServer(sslOptions, server).listen(PORT, () => {
	console.log(`✅ Server running on port ${PORT}`);
});
