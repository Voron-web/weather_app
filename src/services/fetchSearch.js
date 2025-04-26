export default async function serverRequest(text) {
	const url = process.env.REACT_APP_API_URL;
	try {
		const response = await fetch(`${url}/search?value=${text}`);
		if (!response.ok) {
			throw new Error("Error request");
		}
		return await response.json();
	} catch (error) {
		console.error(error);
		return null;
	}
}
