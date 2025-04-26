import React from "react";
import { useMediaQuery } from "react-responsive";
import IconWeather from "./IconWeather";

const CustomTick = ({ x, y, payload, data }) => {
	const timeValue = payload.value.slice(-5);
	const isMobile = useMediaQuery({ maxWidth: 640 });

	return isMobile ? (
		<g transform={`translate(${x},${y})`}>
			<g transform={`translate(${-9},${-5}) `}>
				<IconWeather code={data[payload.index].condition.code} isDay={data[payload.index].is_day} width={12} height={12} />
			</g>

			{/* <use
				xlinkHref={`./images/icon_sprite.svg#${getWeatherIcon(data[payload.index].condition.code, data[payload.index].is_day)}`}
				width={12}
				height={12}
				x={-9}
				y={-5}
			/> */}
			<text x={-3} y={23} textAnchor="middle" fill="#ffffff" fontSize={9} writingMode={"vertical-rl"}>
				{timeValue}
			</text>
		</g>
	) : (
		<g transform={`translate(${x},${y}) `}>
			<g transform={`translate(${-9},${-5}) `}>
				<IconWeather code={data[payload.index].condition.code} isDay={data[payload.index].is_day} width={20} height={20} />
			</g>

			{/* <use
				xlinkHref={`./images/icon_sprite.svg#${getWeatherIcon(data[payload.index].condition.code, data[payload.index].is_day)}`}
				width={20}
				height={20}
				x={-9}
				y={-5}
			/> */}
			<text x={0} y={27} textAnchor="middle" fill="#ffffff" fontSize={12}>
				{timeValue}
			</text>
		</g>
	);
};
export default CustomTick;
