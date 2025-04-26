import React from "react";
import classes from "../../styles/Preloader.module.css";

const Preloader = ({ width = 20 }) => {
	return <div className={classes.preloader} style={{ width: `${width}px` }}></div>;
};

export default Preloader;
