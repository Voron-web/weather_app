import React from "react";
import BaseBlock from "./BaseBlock";
import classes from "../../styles/Wind.module.css";
import Compas from "../services/Compas";
import { useWeather } from "../../context/WeatherProvider";
import { useIsLoad } from "../../context/IsLoadProvider";

const Wind = () => {
	const { weatherData } = useWeather();
	const { isLoad } = useIsLoad();
	return (
		<BaseBlock title="Wind Information">
			<div className={classes.wind}>
				<div className={classes.wind_speed}>
					<div className={classes.wind_speed_icon}>
						<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
							<g>
								<g>
									<path d="m175.146 147.168-12.146-27.468-57 28.531v33.549z" fill="#d5e8fe" />
									<path d="m106 238.221v33.548l57 28.531 10.529-28.279z" fill="#b5dbff" />
								</g>
								<g>
									<path
										d="m451 151.44v117.12l-75 8.29-16-11.85-14 15.16-90 9.95-17-12.11-13 15.43-63 6.96v-180.78l63 6.96 14 14.43 16-11.11 90 9.95 15 13.16 15-9.85z"
										fill="#ff6c6c"
									/>
									<path d="m451 209.998h-288v90.392l63-6.96 13-15.43 17 12.11 90-9.95 14-15.16 16 11.85 75-8.29z" fill="#e63950" />
									<g>
										<g>
											<path d="m226 126.57 30 3.32v160.22l-30 3.32z" fill="#edf5ff" />
											<path d="m226 209.998v83.432l30-3.32v-80.112z" fill="#b5dbff" />
										</g>
										<g>
											<g>
												<path d="m376 143.15v133.7l-30 3.31v-140.32z" fill="#edf5ff" />
											</g>
										</g>
										<path d="m346 209.998v70.162l30-3.31v-66.852z" fill="#b5dbff" />
									</g>

									<path d="m121 482c0-138.198 0-240.387 0-377h-30v377h-30v30h90v-30z" fill="#d5e8fe" />
									<path d="m91 209.998v272.002h-30v30h90v-30h-30c0-100.53 0-183.046 0-272.002z" fill="#fff" />
									<g>
										<g>
											<g>
												<g>
													<path d="m106 120c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.186 45-45 45z" fill="#d5e8fe" />
												</g>
											</g>
										</g>
									</g>
								</g>
							</g>
						</svg>
					</div>
					<div>
						<div className={classes.wind_speed_title}>Wind speed</div>
						<div className={classes.wind_speed_value}>
							{weatherData?.current?.wind_kph} <span>km/h</span>
						</div>
					</div>
				</div>
				<div className={classes.wind_gusts}>
					<div className={classes.wind_gusts_icon}>
						<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
							<g stroke="none" fill="none">
								<path
									d="M10.5,4 C9.77548,4 9.16892,4.51468 9.03002,5.19893 C8.92015,5.74018 8.39232,6.08988 7.85108,5.98001 C7.30983,5.87015 6.96013,5.34231 7.07,4.80107 C7.39437,3.20308 8.80557,2 10.5,2 C12.433,2 14,3.567 14,5.5 C14,7.433 12.433,9 10.5,9 L5,9 C4.44772,9 4,8.55228 4,8 C4,7.44772 4.44772,7 5,7 L10.5,7 C11.3284,7 12,6.32843 12,5.5 C12,4.67157 11.3284,4 10.5,4 Z M18.5,8 C17.7755,8 17.1689,8.51468 17.03,9.19893 C16.9202,9.74018 16.3923,10.0899 15.8511,9.98001 C15.3098,9.87015 14.9601,9.34231 15.07,8.80107 C15.3944,7.20308 16.8056,6 18.5,6 C20.433,6 22,7.567 22,9.5 C22,11.433 20.433,13 18.5,13 L3,13 C2.44772,13 2,12.5523 2,12 C2,11.4477 2.44772,11 3,11 L18.5,11 C19.3284,11 20,10.3284 20,9.5 C20,8.67157 19.3284,8 18.5,8 Z M13.03,18.8011 C13.1689,19.4853 13.7755,20 14.5,20 C15.3284,20 16,19.3284 16,18.5 C16,17.6716 15.3284,17 14.5,17 L8,17 C7.44772,17 7,16.5523 7,16 C7,15.4477 7.44772,15 8,15 L14.5,15 C16.433,15 18,16.567 18,18.5 C18,20.433 16.433,22 14.5,22 C12.8056,22 11.3944,20.7969 11.07,19.1989 C10.9601,18.6577 11.3098,18.1299 11.8511,18.02 C12.3923,17.9101 12.9202,18.2598 13.03,18.8011 Z"
									fill="#fff"></path>
							</g>
						</svg>
					</div>
					<div>
						<div className={classes.wind_gusts_title}>Wind gusts</div>
						<div className={classes.wind_gusts_value}>
							{weatherData?.current?.gust_kph} <span>km/h</span>
						</div>
					</div>
				</div>
				<div className={classes.wind_degree}>
					<Compas rotateDegree={weatherData?.current?.wind_degree} />
				</div>
				<div className={classes.wind_dir}>
					<span className="wind_dir_value">{weatherData?.current?.wind_dir || 0}</span>
				</div>
			</div>
		</BaseBlock>
	);
};
export default Wind;
