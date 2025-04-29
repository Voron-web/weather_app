//This component create modal window with city search

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import "../styles/SearchCity.css";
import serverRequest from "../services/fetchSearch";

const SearchCity = ({ refreshWeather, modalOpen }) => {
	const isMounted = useRef(false);
	const [newText, setNewText] = useState("");
	const [finalText, setFinalText] = useState("");
	const [foundCityList, setFoundCityList] = useState([]);

	useEffect(() => {
		if (newText.length <= 2) {
			return;
		}
		const inputDelay = setTimeout(() => {
			setFinalText(newText);
		}, 1000);
		return () => {
			clearTimeout(inputDelay);
		};
	}, [newText]);

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
		const req = serverRequest(finalText);

		if (req) {
			req.then((data) => {
				if (data) {
					console.log(data);
					setFoundCityList(data);
				}
			});
		}
	}, [finalText]);

	function closeWindow() {
		modalOpen(false);
	}

	function selectNewCity(lat, lon) {
		refreshWeather(lat, lon);
		closeWindow();
	}

	return createPortal(
		<div className="cover" onClick={(e) => (!e.target.closest(".modal") ? closeWindow() : null)}>
			<div className="modal">
				<div className="modal_header">
					<div className="title">Search city</div>
					<div className="modal_close" onClick={closeWindow}>
						<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
							<g>
								<path
									fill="#fff"
									d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
							</g>
						</svg>
					</div>
				</div>
				<input type="text" placeholder="City search" value={newText} onChange={(e) => setNewText(e.target.value)} />
				<ul className="list">
					{foundCityList.map((data, index) => {
						return (
							<li key={index} className="list_item" onClick={() => selectNewCity(data.lat, data.lon)}>
								{data.name}, {data.region}, {data.country}
							</li>
						);
					})}
				</ul>
			</div>
		</div>,
		document.getElementById("portal-div")
	);
};

export default SearchCity;
