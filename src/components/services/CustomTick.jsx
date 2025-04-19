import React from "react";
import getWeatherIcon from "../../services/weatherCode";

const CustomTick = ({ x, y, payload, data }) => {
	const timeValue = payload.value.slice(-5);

	return (
		<g transform={`translate(${x},${y})`}>
			<use
				xlinkHref={`./images/icon_sprite.svg#${getWeatherIcon(data[payload.index].condition.code, data[payload.index].is_day)}`}
				width={20}
				height={20}
				x={-9}
				y={-5}
			/>
			<text x={0} y={27} textAnchor="middle" fill="#ffffff" fontSize={12}>
				{timeValue}
			</text>
		</g>
	);
};
export default CustomTick;
