export async function getWeatherData(lat, lon) {
	const urlApi = process.env.REACT_APP_API_URL;

	// const url = `http://localhost:5000/getweather${lat && lon ? `?lat=${lat}&lon=${lon}` : ""}`;

	const url = `${urlApi}/getweather${lat && lon ? `?lat=${lat}&lon=${lon}` : ""}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Error current weather request. Status:${response.status}`);
		}
		const data = await response.json();
		// if (!data.city || !data.lat || !data.lon) {
		// 	throw new Error("Invalid response data from weather API");
		// }
		// const result = { name: data.city, lat: data.lat, lon: data.lon };
		return data;
	} catch (error) {
		console.error("Error current weather request:", error);
		return null;
	}
}
