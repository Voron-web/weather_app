import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const server = express();

server.use(cors());

const API_geo_url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const API_geo_key = String(process.env.GEO_KEY);

server.get("/search", async (req, res) => {
	const { value } = req.query;
	if (!value) {
		return res.status(400).json({ error: "Query is required" });
	}
	try {
		console.log(typeof API_geo_key);

		const response = await fetch(`${API_geo_url}?limit=10&namePrefix=${value}`, {
			method: "GET",
			headers: {
				// "x-rapidapi-key": API_geo_key,
				"x-rapidapi-key": "69cac178b2msh774794f9b973559p1f9611jsn01f46285b4e8",
				"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
			},
		});
		if (!response.ok) {
			const errorText = await response.text(); // Получаем текст ошибки
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

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
