import ReactGA from "react-ga4";

export const initGA = () => {
	ReactGA.initialize("G-9JMBQEE7X1");
};
export const logPageView = (path) => {
	ReactGA.send({ hitType: "pageview", page: path });
};
