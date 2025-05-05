// src/components/Seo.jsx
import { Helmet } from "react-helmet";

const Seo = ({
	title = "Weather App — Live Forecast",
	description = "Get accurate and up-to-date weather forecasts for any city around the world.",
	url = "https://goodweather.vercel.app",
	image = "https://goodweather.vercel.app/images/preview.jpg",
}) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content="weather, forecast, temperature, weather app, weather online, global weather" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />
			<link rel="canonical" href={url} />
			<html lang="en" />
		</Helmet>
	);
};

export default Seo;
