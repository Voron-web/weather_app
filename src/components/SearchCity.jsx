//This component create modal window with city search

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import "../styles/SearchCity.css";
import serverRequest from "../services/fetchSearch";

const SearchCity = ({ changeCity, modalOpen }) => {
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
		}, 2000);
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

	function selectNewCity(data) {
		changeCity(data);
		closeWindow();
	}

	return createPortal(
		<div className="cover" onClick={(e) => (!e.target.closest(".modal") ? closeWindow() : null)}>
			<div className="modal">
				<div className="title">Search city</div>
				<input type="text" placeholder="City search" value={newText} onChange={(e) => setNewText(e.target.value)} />
				<ul className="list">
					{foundCityList.map((data, index) => {
						return (
							<li key={index} className="list_item" onClick={() => selectNewCity({ name: data.name, lat: data.lat, lon: data.lon })}>
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
