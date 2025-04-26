export const weatherGroupMap = {
	// ☀️ Sunny
	1000: { group: "sunny", dayIcon: "sunny", nightIcon: "clear_moon" },

	// ☁️ Cloudy
	1003: { group: "cloudy", dayIcon: "partly_cloudy", nightIcon: "cloudy_moon" },
	1006: { group: "cloudy", dayIcon: "cloudy", nightIcon: "cloudy" },
	1009: { group: "cloudy", dayIcon: "overcast", nightIcon: "overcast" },

	// 🌫️ Fog
	1030: { group: "fog", dayIcon: "fog", nightIcon: "fog" },
	1135: { group: "fog", dayIcon: "fog", nightIcon: "fog" },
	1147: { group: "fog", dayIcon: "fog", nightIcon: "fog" },

	// 🌧️ Rain
	1063: { group: "rain", dayIcon: "rain_with_sun", nightIcon: "rain" },
	1072: { group: "rain", dayIcon: "rain", nightIcon: "rain" },
	1150: { group: "rain", dayIcon: "rain", nightIcon: "rain" },
	1153: { group: "rain", dayIcon: "rain", nightIcon: "rain" },
	1168: { group: "rain", dayIcon: "rain", nightIcon: "rain" },
	1171: { group: "rain", dayIcon: "heavy_rain", nightIcon: "heavy_rain" },
	1180: { group: "rain", dayIcon: "rain", nightIcon: "rain" },
	1183: { group: "rain", dayIcon: "rain", nightIcon: "rain" },
	1186: { group: "rain", dayIcon: "rain", nightIcon: "rain" },
	1189: { group: "rain", dayIcon: "heavy_rain", nightIcon: "heavy_rain" },
	1192: { group: "rain", dayIcon: "heavy_rain", nightIcon: "heavy_rain" },
	1195: { group: "rain", dayIcon: "heavy_rain", nightIcon: "heavy_rain" },
	1198: { group: "rain", dayIcon: "rain", nightIcon: "rain" },
	1201: { group: "rain", dayIcon: "heavy_rain", nightIcon: "heavy_rain" },
	1240: { group: "rain", dayIcon: "rain_with_sun", nightIcon: "rain" },
	1243: { group: "rain", dayIcon: "heavy_rain", nightIcon: "heavy_rain" },
	1246: { group: "rain", dayIcon: "heavy_rain", nightIcon: "heavy_rain" },
	1261: { group: "rain", dayIcon: "rain", nightIcon: "rain" },
	1264: { group: "rain", dayIcon: "heavy_rain", nightIcon: "heavy_rain" },

	// ❄️ Snow
	1066: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1069: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1114: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1117: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1204: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1207: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1210: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1213: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1216: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1219: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1222: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1225: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1237: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1249: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1252: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1255: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	1258: { group: "snow", dayIcon: "snow", nightIcon: "snow" },
	// ⚡ Thunder
	1087: { group: "thunder", dayIcon: "thunder", nightIcon: "thunder" },
	1273: { group: "thunder", dayIcon: "rain_with_thunder", nightIcon: "rain_with_thunder" },
	1276: { group: "thunder", dayIcon: "rain_with_thunder", nightIcon: "rain_with_thunder" },
	1279: { group: "thunder", dayIcon: "thunder", nightIcon: "thunder" },
	1282: { group: "thunder", dayIcon: "thunder", nightIcon: "thunder" },
};

function getWeatherIcon(code, isDay) {
	return weatherGroupMap[code][`${isDay ? "dayIcon" : "nightIcon"}`];
}

export default getWeatherIcon;
