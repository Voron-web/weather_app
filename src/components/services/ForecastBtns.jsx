import React from "react";
import getWeatherIcon from "../../services/weatherCode";
import classes from "../../styles/ForecastBtns.module.css";
import Preloader from "../services/Preloader";
import { useIsLoad } from "../../context/IsLoadProvider";
import { useWeather } from "../../context/WeatherProvider";

const ForecastBtns = ({ currentBtn, changeCurrentBtn }) => {
	const { isLoad } = useIsLoad();
	const { weatherData } = useWeather();

	const convertDate = (date) => {
		const dateValue = new Date(Date.parse(date));
		const dateString = `${dateValue.getDate()}.${String(dateValue.getMonth()).length < 2 ? "0" + dateValue.getMonth() : dateValue.getMonth()}`;

		return dateString;
	};
	return (
		<div className={classes.btn_line}>
			{isLoad ? (
				weatherData?.forecast?.forecastday.map((item, index) => {
					if (index < 3) {
						return (
							<div
								key={index}
								className={index === currentBtn ? `${classes.btn} ${classes.btn__active}` : classes.btn}
								onClick={() => changeCurrentBtn(index)}>
								<div className={classes.btn__wrapper}>
									<svg className={classes.btn__icon}>
										<use xlinkHref={`./images/icon_sprite.svg#${getWeatherIcon(item.day.condition.code, 1)}`} />
									</svg>
									<p>{convertDate(item.date)}</p>
								</div>
							</div>
						);
					} else {
						return null;
					}
				})
			) : (
				<div className={classes.preloader}>
					<Preloader />
				</div>
			)}
		</div>
	);
};

export default ForecastBtns;
