//This component create modal window with city search

import React, { useEffect, useState, useRef } from "react";
import classes from "../styles/SearchCity.module.css";

const SearchCity = ({ changeCity, modalOpen }) => {
	const isMounted = useRef(false);
	const [newText, setNewText] = useState("");
	const [finalText, setFinalText] = useState("");
	const [foundCityList, setFoundList] = useState([]);

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
		serverRequest(finalText);
	}, [finalText]);

	function closeWindow() {
		modalOpen(false);
	}

	async function serverRequest(text) {
		try {
			const response = await fetch(`http://localhost:5000/search?value=${text}`);
			if (!response.ok) {
				throw new Error("Error request");
			}
			setFoundList(await response.json());
		} catch (error) {
			console.error(error);
		}
	}

	function selectNewCity(data) {
		changeCity(data);
		closeWindow();
	}

	return (
		<div className={classes.cover} onClick={(e) => (!e.target.closest(`.${classes.modal}`) ? closeWindow() : null)}>
			<div className={classes.modal}>
				<div className={classes.title}>Search city</div>
				<input type="text" placeholder="City search" value={newText} onChange={(e) => setNewText(e.target.value)} />
				<ul className={classes.list}>
					{foundCityList.map((data, index) => {
						return (
							<li key={index} className={classes.list_item} onClick={() => selectNewCity({ name: data.name, lat: data.lat, lon: data.lon })}>
								{data.name}, {data.region}, {data.country}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default SearchCity;
