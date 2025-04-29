// Don,t used now!!!!!!

// This function makes a request to the API and defines the city
// and its coordinates by the client's IP address
export default async function getCityByIp() {
	const url = "http://ip-api.com/json";
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Error IP request. Status:${response.status}`);
		}
		const data = await response.json();
		if (!data.city || !data.lat || !data.lon) {
			throw new Error("Invalid response data from IP API");
		}
		const result = { name: data.city, lat: data.lat, lon: data.lon };
		return result;
	} catch (error) {
		console.error("Error IP request:", error);
		return null;
	}
}
