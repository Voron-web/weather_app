import React from "react";
import classes from "../../styles/ForecastBtns.module.css";
import Preloader from "../services/Preloader";
import { useIsLoad } from "../../context/IsLoadProvider";
import { useWeather } from "../../context/WeatherProvider";
import IconWeather from "./IconWeather";

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
									<div className={classes.btn__icon}>
										<IconWeather code={item.day.condition.code} />
									</div>
									<p>{convertDate(item.date)}</p>
								</div>
							</div>
						);
					} else {
						return null;
					}
				})
			) : (
				<Preloader width={70} />
			)}
		</div>
	);
};

export default ForecastBtns;
