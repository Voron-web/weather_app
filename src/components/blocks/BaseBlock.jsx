import React from "react";
import classes from "../../styles/BaseBlock.module.css";

const BaseBlock = ({ children, title }) => {
	return (
		<div className={classes.base_block}>
			<div className={classes.wrapper}>
				<div className={classes.title}>
					<p>{title}</p>
				</div>
				{children}
			</div>
		</div>
	);
};

export default BaseBlock;
