export default async function serverRequest(text) {
	try {
		const response = await fetch(`http://localhost:5000/search?value=${text}`);
		if (!response.ok) {
			throw new Error("Error request");
		}
		return await response.json();
	} catch (error) {
		console.error(error);
		return null;
	}
}
