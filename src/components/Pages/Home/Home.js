import React, { useState, useEffect, useRef } from 'react';
import Review from './Review/Review';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import ClipLoader from 'react-spinners/ClipLoader';
import "./Home.css";

const Home = () => {
	
	return (
		<>		
					<Slider></Slider>
					<Services></Services>
					<Review></Review>
				
		</>
	);
};

export default Home;