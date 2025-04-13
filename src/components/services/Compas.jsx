import React, { useEffect, useRef } from "react";
import "../../styles/Compas.css";

const Compas = ({ rotateDegree }) => {
	const [isAnimated, setIsAnimated] = React.useState(false);
	const startAngle = useRef(0); //save the start angle of the animation
	useEffect(() => {
		setIsAnimated(false);
		const restartAnimation = setTimeout(
			() => {
				setIsAnimated(true);
			},

			2000
		);
		const refreshAngle = setInterval(() => {
			startAngle.current = rotateDegree;
		}, 5000);
		return () => {
			clearTimeout(restartAnimation);
			clearTimeout(refreshAngle);
		};
	}, [rotateDegree]);
	return (
		<div className="compas">
			<svg viewBox="0 0 12.303125 12.673541" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<g transform="translate(-72.445099,-76.243615)">
					<g id="g40" transform="matrix(0.26458333,0,0,0.26458333,80.362755,76.177469)">
						<g id="g39" transform="translate(-31.625,-0.75000001)">
							<g id="g34">
								<g fill="#ffffff90" id="g24">
									<path d="m 22.3,7.6 h 0.5 v 3.5 h -0.5 z" transform="matrix(0.981,-0.195,0.195,0.981,-1.404,4.585)" id="path9" />
									<path d="m 28.3,37.4 h 0.5 v 3.5 h -0.5 z" transform="matrix(0.981,-0.195,0.195,0.981,-7.1,6.313)" id="path10" />
									<path d="m 16.9,9.9 h 0.5 v 3.5 h -0.5 z" transform="matrix(0.832,-0.556,0.556,0.832,-3.61,11.472)" id="path11" />
									<path d="m 33.7,35.2 h 0.5 v 3.5 h -0.5 z" transform="matrix(0.832,-0.556,0.556,0.832,-14.795,25.099)" id="path12" />
									<path d="m 12.7,14.1 h 0.5 v 3.5 h -0.5 z" transform="matrix(0.556,-0.832,0.832,0.556,-7.461,17.793)" id="path13" />
									<path d="m 37.9,31 h 0.5 v 3.5 h -0.5 z" transform="matrix(0.556,-0.832,0.832,0.556,-10.267,46.284)" id="path14" />
									<path d="m 10.4,19.6 h 0.5 v 3.5 h -0.5 z" transform="matrix(0.195,-0.981,0.981,0.195,-12.369,27.626)" id="path15" />
									<path d="m 40.2,25.5 h 0.5 V 29 h -0.5 z" transform="matrix(0.195,-0.981,0.981,0.195,5.793,61.605)" id="path16" />
									<path d="m 10.4,25.5 h 0.5 V 29 h -0.5 z" transform="matrix(-0.195,-0.981,0.981,-0.195,-14.025,43.036)" id="path17" />
									<path d="m 40.2,19.6 h 0.5 v 3.5 h -0.5 z" transform="matrix(-0.195,-0.981,0.981,-0.195,27.378,65.166)" id="path18" />
									<path d="m 12.7,31 h 0.5 v 3.5 h -0.5 z" transform="matrix(-0.556,-0.832,0.832,-0.556,-7.139,61.676)" id="path19" />
									<path d="m 37.9,14.1 h 0.5 v 3.5 h -0.5 z" transform="matrix(-0.556,-0.832,0.832,-0.556,46.164,56.427)" id="path20" />
									<path d="m 16.9,35.2 h 0.5 v 3.5 h -0.5 z" transform="matrix(-0.832,-0.556,0.556,-0.832,10.804,77.147)" id="path21" />
									<path d="m 33.7,9.9 h 0.5 v 3.5 h -0.5 z" transform="matrix(-0.832,-0.556,0.556,-0.832,55.728,40.279)" id="path22" />
									<path d="m 22.3,37.4 h 0.5 v 3.5 h -0.5 z" transform="matrix(-0.981,-0.195,0.195,-0.981,37.071,82.055)" id="path23" />
									<path d="m 28.3,7.6 h 0.5 v 3.5 h -0.5 z" transform="matrix(-0.981,-0.195,0.195,-0.981,54.615,24.219)" id="path24" />
								</g>

								<path
									d="m 27,25.8 17.5,-1.3 c 0.2,0 0.2,-0.4 0,-0.4 L 27,22.8 25.7,5.3 c 0,-0.2 -0.4,-0.2 -0.4,0 L 24,22.8 6.5,24.1 c -0.2,0 -0.2,0.4 0,0.4 l 17.5,1.3 1.3,17.5 c 0,0.2 0.4,0.2 0.4,0 z"
									fill="#ffffff50"
									id="path25"
								/>
								<path d="m 25.5,25.5 8.3,7.1 -7.1,-8.3 7.1,-8.2 -8.3,7.1 -8.2,-7.1 7.1,8.2 -7.1,8.3 z" fill="#ffffff50" id="path26" />
							</g>
							<g id="g36" fill="#fff">
								<path d="m 48.2,22.6 v 0.6 H 46.4 V 24 H 48 v 0.5 h -1.7 v 0.9 h 1.9 V 26 h -2.5 v -3.5 h 2.5 z" id="path35" />
								<path d="m 2.9,24.9 0.6,-2 H 4 l 0.6,2 0.7,-2 h 0.5 l -1,2.8 H 4.4 L 3.8,23.8 3.2,25.7 H 2.7 l -1,-2.8 h 0.5 z" id="path36" />
							</g>
							<g id="g38" fill="#fff">
								<path d="M 26.4,1 H 27 V 4.1 H 26.4 L 24.6,1.8 V 4.1 H 24.1 V 1 h 0.5 l 1.8,2.3 z" id="path37" />
								<path d="m 25.5,45.7 c -0.3,0 -0.6,0.1 -0.6,0.4 0,0.4 0.4,0.5 0.9,0.6 0.7,0.2 1.2,0.4 1.2,1.1 0,0.7 -0.6,1.1 -1.3,1.1 -0.6,0 -1.1,-0.2 -1.5,-0.6 l 0.4,-0.5 c 0.4,0.3 0.8,0.5 1.2,0.5 0.3,0 0.7,-0.1 0.7,-0.5 0,-0.4 -0.4,-0.5 -0.7,-0.6 C 25,47 24.5,46.8 24.5,46 c 0,-0.7 0.6,-1.1 1.3,-1.1 0.5,0 1,0.2 1.3,0.4 l -0.3,0.5 c -0.5,0.1 -0.9,-0.1 -1.3,-0.1 z" />
							</g>
						</g>
					</g>
				</g>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				className={isAnimated ? "arrow animation" : "arrow"}
				style={{ "--turnAngle": `${rotateDegree}deg`, "--startAngle": `${startAngle.current}deg` }}>
				<g>
					<g transform="scale(0.7)" transformOrigin="center" fill="#d42020" stroke="#fff" strokeWidth="10">
						<path d="M349.688,450.526l-85.333-409.6c-0.828-3.951-4.309-6.792-8.354-6.792s-7.526,2.842-8.354,6.792l-85.333,409.6 c-0.802,3.84,1.118,7.723,4.642,9.421c3.524,1.698,7.757,0.785,10.266-2.219L256,363.196l78.78,94.532 c1.664,1.997,4.079,3.072,6.554,3.072c1.254,0,2.517-0.273,3.712-0.853C348.57,458.24,350.49,454.357,349.688,450.526z" />
					</g>
				</g>
			</svg>
		</div>
	);
};

export default Compas;
