import React, { createContext, useContext, useState } from "react";

const IsLoadContext = createContext();

export const IsLoadProvider = ({ children }) => {
	const [isLoad, setIsLoad] = useState(false);

	const isLoadValue = { isLoad, setIsLoad };

	return <IsLoadContext.Provider value={isLoadValue}>{children}</IsLoadContext.Provider>;
};

export const useIsLoad = () => useContext(IsLoadContext);
