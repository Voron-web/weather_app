import React, { useEffect, useState } from "react";
import { useIsLoad } from "../../context/IsLoadProvider";
import getWeatherIcon from "../../services/weatherCode";

const IconWeather = ({ code = 1000, isDay = true, width = "100%", height = "100%" }) => {
	const [currentIcon, setCurrentIcon] = useState("");
	const { isLoad } = useIsLoad();

	useEffect(() => {
		if (isLoad) {
			setCurrentIcon(getWeatherIcon(code, isDay));
		}
	}, [code, isDay, isLoad]);

	return (
		<svg width={width} height={height}>
			<defs>
				<radialGradient
					id="paint0_radial_12_2982"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(164.174 20.0211) rotate(180) scale(101.239 101.239)">
					<stop stopColor="#F8F8F8" />
					<stop offset="0.1559" stopColor="#EDE9F1" />
					<stop offset="1" stopColor="#9B9DA2" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_12_2982"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(172.857 30.4404) rotate(126.034) scale(21.6788 31.6252)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_12_2982"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(122.025 81.3879) rotate(-136.789) scale(23.5756 10.0135)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_2982"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(113.828 45.3641) rotate(180) scale(138.763 101.367)">
					<stop stopColor="white" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint4_radial_12_2982"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(104.942 53.4553) rotate(126.034) scale(23.883 34.8407)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint5_radial_12_2982"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(155.421 93.4675) rotate(126.034) scale(18.7683 27.3793)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint6_radial_12_2982"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(21.5248 119.898) rotate(-25.7092) scale(9.62053 28.0062)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_12_2874"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(104.928 35.6361) rotate(126.034) scale(23.8824 34.8399)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_12_2874"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(155.405 75.649) rotate(126.034) scale(18.7694 27.381)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_2874"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(21.5096 102.101) rotate(-25.7093) scale(9.62091 28.0073)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<radialGradient
					id="paint0_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(73.458 17.2958) rotate(180) scale(88.3396 64.5322)">
					<stop stopColor="white" />
					<stop offset="0.198" stopColor="#B4ECFF" />
					<stop offset="1" stopColor="#69ACF1" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(67.8013 22.4454) rotate(126.034) scale(15.2041 22.1798)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(99.9363 47.9199) rotate(126.034) scale(11.9495 17.4321)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(14.695 64.749) rotate(-25.7092) scale(6.12486 17.83)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint4_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(197.328 17.2958) rotate(180) scale(88.3393 64.5321)">
					<stop stopColor="white" />
					<stop offset="0.198" stopColor="#B4ECFF" />
					<stop offset="1" stopColor="#69ACF1" />
				</radialGradient>
				<radialGradient
					id="paint5_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(191.672 22.445) rotate(126.034) scale(15.2038 22.1794)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint6_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(223.807 47.9198) rotate(126.034) scale(11.9495 17.4321)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint7_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(138.563 64.7468) rotate(-25.7093) scale(6.12485 17.83)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint8_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(138.427 52.368) rotate(180) scale(106.69 77.9373)">
					<stop stopColor="white" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint9_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(131.594 58.5895) rotate(126.034) scale(18.362 26.7866)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint10_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(170.408 89.3535) rotate(126.034) scale(14.4307 21.0516)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint11_radial_12_3058"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(67.4578 109.681) rotate(-25.7093) scale(7.39718 21.5339)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<radialGradient
					id="paint0_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(113.815 27.9808) rotate(180) scale(138.76 101.365)">
					<stop stopColor="white" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(104.927 36.0679) rotate(126.034) scale(23.8816 34.8386)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(155.406 76.0811) rotate(126.034) scale(18.7691 27.3806)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(21.5159 102.53) rotate(-25.7093) scale(9.62031 28.0056)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint4_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(35.6218 152.455) rotate(30.0008) scale(19.5348 19.5349)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint5_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(36.6534 151.182) rotate(156.037) scale(4.36498 6.36747)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint6_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(69.5785 152.456) rotate(30.0008) scale(19.5348 19.5349)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint7_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(70.6105 151.182) rotate(156.037) scale(4.36498 6.36747)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint8_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(103.536 152.456) rotate(30.0008) scale(19.5356 19.5357)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint9_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(104.568 151.182) rotate(156.037) scale(4.36497 6.36746)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint10_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(137.493 152.456) rotate(30.0008) scale(19.5348 19.5349)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint11_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(138.525 151.182) rotate(156.037) scale(4.36497 6.36746)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint12_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(52.6008 180.986) rotate(30.0008) scale(19.5348 19.5349)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint13_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(53.6318 179.713) rotate(156.037) scale(4.36497 6.36746)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint14_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(86.558 180.986) rotate(30.0008) scale(19.5351 19.5351)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint15_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(87.5898 179.713) rotate(156.037) scale(4.36526 6.36788)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint16_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(120.515 180.987) rotate(30.0008) scale(19.5348 19.5349)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint17_radial_12_3086"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(121.546 179.713) rotate(156.037) scale(4.36526 6.36788)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<radialGradient
					id="paint0_radial_12_2943"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(169.738 27.2101) rotate(180) scale(138.761 101.365)">
					<stop stopColor="#B6CCD2" />
					<stop offset="0.198" stopColor="#97B6BE" />
					<stop offset="1" stopColor="#5D87B4" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_12_2943"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(164.584 35.297) rotate(126.034) scale(23.8827 34.8403)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_12_2943"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(211.329 75.3083) rotate(126.034) scale(18.7691 27.3806)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_2943"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(77.4268 101.755) rotate(-25.7093) scale(9.62031 28.0056)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint4_radial_12_2943"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(113.72 54.549) rotate(180) scale(138.764 101.367)">
					<stop stopColor="white" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint5_radial_12_2943"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(104.834 62.6366) rotate(126.034) scale(23.883 34.8407)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint6_radial_12_2943"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(155.31 102.648) rotate(126.034) scale(18.7688 27.3801)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint7_radial_12_2943"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(21.411 129.097) rotate(-25.7093) scale(9.62071 28.0067)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<linearGradient id="paint0_linear_12_2879" x1="200.178" y1="-0.646849" x2="99.35" y2="112.025" gradientUnits="userSpaceOnUse">
					<stop stopColor="#FFBA24" />
					<stop offset="1" stopColor="#FF5500" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_12_2879"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(157.588 31.1628) rotate(180) scale(80.6632 80.6635)">
					<stop stopColor="#FFF4C3" />
					<stop offset="0.1559" stopColor="#FFE036" />
					<stop offset="1" stopColor="#FA761C" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_12_2879"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(164.506 39.4638) rotate(126.034) scale(17.2733 25.1984)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_2879"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(124.006 80.0589) rotate(-136.79) scale(18.7833 7.97801)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint4_radial_12_2879"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(114.074 52.5491) rotate(180) scale(138.764 101.367)">
					<stop stopColor="white" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint5_radial_12_2879"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(133.736 64.1863) scale(117.965 117.965)">
					<stop stopColor="#FFE036" />
					<stop offset="0.00517127" stopColor="#FFDF36" stopOpacity="0.9933" />
					<stop offset="0.1623" stopColor="#FDB92C" stopOpacity="0.789" />
					<stop offset="0.319" stopColor="#FC9C25" stopOpacity="0.5851" />
					<stop offset="0.4735" stopColor="#FB8720" stopOpacity="0.3841" />
					<stop offset="0.6247" stopColor="#FA7A1D" stopOpacity="0.1875" />
					<stop offset="0.7688" stopColor="#FA761C" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint6_radial_12_2879"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(105.186 60.6363) rotate(126.034) scale(23.8824 34.8399)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint7_radial_12_2879"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(155.664 100.65) rotate(126.034) scale(18.7688 27.3801)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint8_radial_12_2879"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(21.7593 127.091) rotate(-25.7093) scale(9.62071 28.0067)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<linearGradient id="paint0_linear_12_3032" x1="205.346" y1="-1.80523" x2="92.7687" y2="123.996" gradientUnits="userSpaceOnUse">
					<stop stopColor="#FFBA24" />
					<stop offset="1" stopColor="#FF5500" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(157.795 33.7119) rotate(180) scale(90.0622 90.0625)">
					<stop stopColor="#FFF4C3" />
					<stop offset="0.1559" stopColor="#FFE036" />
					<stop offset="1" stopColor="#FA761C" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(165.518 42.9802) rotate(126.034) scale(19.285 28.1331)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(120.299 88.3016) rotate(-136.789) scale(20.9713 8.90733)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint4_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(113.901 55.3641) rotate(180) scale(138.763 101.367)">
					<stop stopColor="white" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint5_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(131.769 63.2589) scale(121.869 121.869)">
					<stop stopColor="#FFE036" />
					<stop offset="0.00517127" stopColor="#FFDF36" stopOpacity="0.9933" />
					<stop offset="0.1623" stopColor="#FDB92C" stopOpacity="0.789" />
					<stop offset="0.319" stopColor="#FC9C25" stopOpacity="0.5851" />
					<stop offset="0.4735" stopColor="#FB8720" stopOpacity="0.3841" />
					<stop offset="0.6247" stopColor="#FA7A1D" stopOpacity="0.1875" />
					<stop offset="0.7688" stopColor="#FA761C" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint6_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(105.014 63.4558) rotate(126.034) scale(23.8827 34.8403)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint7_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(155.493 103.467) rotate(126.034) scale(18.7691 27.3806)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint8_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(21.6157 129.917) rotate(-25.7093) scale(9.62051 28.0062)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint9_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(35.7079 179.841) rotate(30.0008) scale(19.5349 19.5349)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint10_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(36.7391 178.57) rotate(156.037) scale(4.36554 6.36829)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint11_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(69.6646 179.841) rotate(30.0008) scale(19.5356 19.5357)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint12_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(70.6954 178.57) rotate(156.037) scale(4.36582 6.3687)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint13_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(103.622 179.841) rotate(30.0008) scale(19.5348 19.5349)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint14_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(104.653 178.57) rotate(156.037) scale(4.36582 6.3687)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint15_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(137.58 179.841) rotate(30.0008) scale(19.5349 19.5349)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint16_radial_12_3032"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(138.611 178.57) rotate(156.037) scale(4.36582 6.3687)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<linearGradient id="paint0_linear_12_3115" x1="78.0418" y1="184.379" x2="100.803" y2="112.705" gradientUnits="userSpaceOnUse">
					<stop offset="0.1559" stopColor="#FFE036" />
					<stop offset="1" stopColor="#FA761C" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(114.558 27.9808) rotate(180) scale(138.761 101.365)">
					<stop stopColor="#B6CCD2" />
					<stop offset="0.198" stopColor="#97B6BE" />
					<stop offset="1" stopColor="#5D87B4" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(109.404 36.0688) rotate(126.034) scale(23.8821 34.8395)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(156.149 76.0818) rotate(126.034) scale(18.7683 27.3793)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint4_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(22.2445 102.516) rotate(-25.7092) scale(9.62033 28.0056)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint5_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(35.0616 153.886) rotate(30.0008) scale(19.5357 19.5357)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint6_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(36.0942 152.613) rotate(156.037) scale(4.36468 6.36705)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint7_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(48.1522 177.677) rotate(30.0009) scale(19.5375 19.5376)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint8_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(49.1847 176.404) rotate(156.037) scale(4.36496 6.36746)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint9_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(139.786 153.886) rotate(30.0008) scale(19.5341 19.5341)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint10_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(140.817 152.613) rotate(156.037) scale(4.36468 6.36705)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint11_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(117.235 177.676) rotate(30.0009) scale(19.5356 19.5356)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint12_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(118.267 176.403) rotate(156.037) scale(4.36524 6.36787)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<radialGradient
					id="paint0_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(113.901 27.9808) rotate(180) scale(138.76 101.365)">
					<stop stopColor="white" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(105.013 36.0686) rotate(126.034) scale(23.8816 34.8386)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(155.493 76.0815) rotate(126.034) scale(18.7691 27.3806)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(21.6068 102.535) rotate(-25.7093) scale(9.62032 28.0056)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint4_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(35.7079 152.456) rotate(30.0008) scale(19.5349 19.5349)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint5_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(36.7397 151.182) rotate(156.037) scale(4.36497 6.36747)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint6_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(69.6645 152.456) rotate(30.0008) scale(19.5356 19.5357)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint7_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(70.6958 151.182) rotate(156.037) scale(4.36498 6.36747)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint8_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(103.622 152.456) rotate(30.0008) scale(19.5348 19.5349)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint9_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(104.654 151.182) rotate(156.037) scale(4.36497 6.36747)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint10_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(137.58 152.456) rotate(30.0008) scale(19.5349 19.5349)">
					<stop stopColor="#D0F2FF" />
					<stop offset="0.198" stopColor="#D5F3FF" />
					<stop offset="1" stopColor="#85BCF1" />
				</radialGradient>
				<radialGradient
					id="paint11_radial_12_2963"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(138.611 151.182) rotate(156.037) scale(4.36526 6.36788)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<radialGradient
					id="paint0_radial_12_3164"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(105.321 44.0411) scale(123.747 123.748)">
					<stop stopColor="#28CBE9" />
					<stop offset="1" stopColor="#0A4FBB" />
				</radialGradient>

				<radialGradient
					id="paint1_radial_8026_580"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(74.2761 30.3674) rotate(126.034) scale(21.6788 31.6252)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_8026_580"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(23.444 81.3149) rotate(-136.789) scale(23.5756 10.0135)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<linearGradient id="paint0_linear_12_2868" x1="144.875" y1="-1.32887" x2="12.0352" y2="147.116" gradientUnits="userSpaceOnUse">
					<stop stopColor="#FFBA24" />
					<stop offset="1" stopColor="#FF5500" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_12_2868"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(88.7649 40.5812) rotate(180) scale(106.272 106.273)">
					<stop stopColor="#FFF4C3" />
					<stop offset="0.1559" stopColor="#FFE036" />
					<stop offset="1" stopColor="#FA761C" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_12_2868"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(97.8772 51.5159) rotate(126.034) scale(22.7571 33.1982)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_2868"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(44.5198 104.996) rotate(-136.79) scale(24.7463 10.5107)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<linearGradient id="paint0_linear_12_3115" x1="78.0418" y1="184.379" x2="100.803" y2="112.705" gradientUnits="userSpaceOnUse">
					<stop offset="0.1559" stopColor="#FFE036" />
					<stop offset="1" stopColor="#FA761C" />
				</linearGradient>
				<linearGradient id="paint1_linear_12_3115" x1="101.816" y1="184.379" x2="124.578" y2="112.704" gradientUnits="userSpaceOnUse">
					<stop offset="0.1559" stopColor="#FFE036" />
					<stop offset="1" stopColor="#FA761C" />
				</linearGradient>
				<radialGradient
					id="paint2_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(114.558 27.9808) rotate(180) scale(138.761 101.365)">
					<stop stopColor="#B6CCD2" />
					<stop offset="0.198" stopColor="#97B6BE" />
					<stop offset="1" stopColor="#5D87B4" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(109.404 36.068) rotate(126.034) scale(23.8818 34.839)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint4_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(155.235 76.0827) rotate(126.034) scale(18.7688 27.3802)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint5_radial_12_3115"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(21.3359 102.521) rotate(-25.7093) scale(9.62051 28.0062)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<linearGradient id="paint0_linear_12_2954" x1="53.1905" y1="184.379" x2="75.9518" y2="112.705" gradientUnits="userSpaceOnUse">
					<stop offset="0.1559" stopColor="#FFE036" />
					<stop offset="1" stopColor="#FA761C" />
				</linearGradient>
				<linearGradient id="paint1_linear_12_2954" x1="101.816" y1="184.379" x2="124.578" y2="112.704" gradientUnits="userSpaceOnUse">
					<stop offset="0.1559" stopColor="#FFE036" />
					<stop offset="1" stopColor="#FA761C" />
				</linearGradient>
				<radialGradient
					id="paint2_radial_12_2954"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(113.644 27.9808) rotate(180) scale(138.76 101.365)">
					<stop stopColor="#B6CCD2" />
					<stop offset="0.198" stopColor="#97B6BE" />
					<stop offset="1" stopColor="#5D87B4" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_12_2954"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(108.491 36.068) rotate(126.034) scale(23.8818 34.839)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint4_radial_12_2954"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(155.235 76.0827) rotate(126.034) scale(18.7688 27.3802)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint5_radial_12_2954"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(21.3359 102.521) rotate(-25.7093) scale(9.62051 28.0062)">
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
			</defs>
			<use xlinkHref={`/images/icon_sprite.svg#${currentIcon}`} />
		</svg>
	);
};

export default IconWeather;
