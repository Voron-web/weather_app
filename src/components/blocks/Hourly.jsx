import React, { useMemo } from "react";
import classes from "../../styles/Hourly.module.css";
import BaseBlock from "./BaseBlock";
import CustomTick from "../services/CustomTick";
import { XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from "recharts";
import { useWeather } from "../../context/WeatherProvider";
import { useIsLoad } from "../../context/IsLoadProvider";

const Hourly = () => {
	const { weatherData } = useWeather();
	const { isLoad } = useIsLoad();

	const todayHours = weatherData?.forecast?.forecastday[0]?.hour;
	const tomorrowHours = weatherData?.forecast?.forecastday[1]?.hour;

	const hoursData = useMemo(() => {
		const currentDate = new Date();
		const currentHour = currentDate.getHours();
		let todayHoursData = [];
		if (todayHours) {
			if (currentHour < 12) {
				todayHoursData = todayHours.slice(currentHour + 1, currentHour + 13);
			} else {
				const todayHoursForecast = todayHours.slice(currentHour + 1, currentHour + 12);
				todayHoursData = [...todayHoursForecast, ...tomorrowHours.slice(0, 12 - todayHoursForecast.length)];
			}
			// console.log(todayHoursData);

			return todayHoursData || [];
		}
	}, [weatherData]);

	return (
		<div className={classes.hourly}>
			<BaseBlock title="12-hour forecast">
				<ResponsiveContainer width="100%" height={170} padding={{ top: 10, left: 5, right: 20 }}>
					<AreaChart data={hoursData} margin={{ bottom: 30, top: 35 }}>
						<XAxis
							dataKey="time"
							axisLine={false}
							interval={0}
							tickLine={false}
							tick={(props) => <CustomTick {...props} data={hoursData} />}
							padding={{ top: 10, left: 5, right: 20 }}
						/>
						<YAxis axisLine={false} tickLine={false} tick={false} />
						<Area
							type="monotone"
							dataKey="temp_c"
							stroke="#ffffff"
							fill="#ffffff70"
							strokeWidth={1}
							dot={true}
							label={({ x, y, value }) => (
								<text x={x} y={y - 20} fill="#fff" fontSize={16} fontWeight={"bold"} textAnchor="middle">
									{Math.round(value)}°C
								</text>
							)}
						/>
					</AreaChart>
				</ResponsiveContainer>
			</BaseBlock>
		</div>
	);
};

export default Hourly;
