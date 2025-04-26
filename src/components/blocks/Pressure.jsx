import React from "react";
import classes from "../../styles/Pressure.module.css";
import BaseBlock from "./BaseBlock";
import Preloader from "../services/Preloader";
import { useWeather } from "../../context/WeatherProvider";
import { useIsLoad } from "../../context/IsLoadProvider";

const Pressure = () => {
	const { weatherData } = useWeather();
	const { isLoad } = useIsLoad();
	return (
		<BaseBlock title="Pressure">
			<div className={classes.pressure}>
				<div className={classes.pressure__icon}>
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000000" stroke="#000000">
						<g>
							<path
								fill="#8ec3ec"
								d="M256,0C114.62,0,0,114.62,0,256c0,30.845,5.461,60.427,15.462,87.814h481.075 C506.539,316.427,512,286.845,512,256C512,114.62,397.38,0,256,0z"></path>{" "}
							<path
								fill="#00b81f"
								d="M388.244,123.756l-80.919,80.919c-13.141-13.13-31.278-21.254-51.325-21.254 c-40.084,0-72.579,32.495-72.579,72.579c0,8.75,1.547,17.135,4.38,24.895L80.27,320.159c-7.305-20.013-11.287-41.62-11.287-64.159 c0-103.287,83.729-187.017,187.017-187.017C307.644,68.983,354.395,89.919,388.244,123.756z"></path>{" "}
							<path
								fill="#e44949"
								d="M443.017,256c0,22.539-3.982,44.146-11.287,64.148l-107.531-39.253 c2.833-7.76,4.38-16.145,4.38-24.895c0-20.048-8.124-38.184-21.254-51.325l80.919-80.919 C422.081,157.605,443.017,204.356,443.017,256z"></path>{" "}
							<path
								fill="#000000"
								d="M300.7,219.833c-2.183,0-4.368-0.833-6.035-2.499c-3.333-3.334-3.333-8.736,0-12.068L400.478,99.453 c3.334-3.331,8.736-3.331,12.068,0c3.333,3.334,3.333,8.736,0,12.068L306.734,217.335 C305.068,218.999,302.883,219.833,300.7,219.833z"></path>{" "}
							<path
								fill="#489ff0"
								d="M496.538,343.814C460.709,441.947,366.535,512,256,512S51.291,441.947,15.462,343.814l172.339-62.919 c-2.833-7.76-4.38-16.145-4.38-24.895c0-40.084,32.495-72.579,72.579-72.579c20.048,0,38.184,8.124,51.325,21.254 c13.13,13.141,21.254,31.278,21.254,51.325c0,8.75-1.547,17.135-4.38,24.895L496.538,343.814z"></path>{" "}
							<path
								fill="#AE7A66"
								d="M256,222.777c18.352,0,33.223,14.871,33.223,33.223S274.352,289.223,256,289.223 S222.777,274.352,222.777,256S237.648,222.777,256,222.777z"></path>{" "}
						</g>
					</svg>
				</div>
				<div>
					<p className={classes.pressure__title}>Atmospheric pressure</p>
					{isLoad ? (
						<div className={classes.pressure__value}>
							{weatherData?.current?.pressure_in}
							<span>mmHg</span>
						</div>
					) : (
						<Preloader width={120} />
					)}
				</div>
			</div>
		</BaseBlock>
	);
};

export default Pressure;
