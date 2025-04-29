// This middleware makes a request to the API and defines the city
// and its coordinates by the client's IP address
import fetch from "node-fetch";

export default async function getLocationByIp(req, res, next) {
	if (!req.query.lon && !req.query.lat) {
		const url = "http://ip-api.com/json";
		const ipReq = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;
		// console.log("ipReq", ipReq);

		try {
			const response = await fetch(`${url}/${ipReq}`);
			if (!response.ok) {
				throw new Error(`Error IP request. Status:${response.status}`);
			}
			const data = await response.json();
			if (!data.lat || !data.lon) {
				throw new Error("Invalid response data from IP API");
			}
			req.lat = data.lat;
			req.lon = data.lon;
			next();
		} catch (error) {
			//use default coordinates(New York)
			req.lat = 40.71;
			req.lon = -74.0;
			console.error("Error IP request:", error);
			next();
		}
	} else {
		//use default coordinates(New York)
		req.lat = 40.71;
		req.lon = -74.0;
		next();
	}
}
