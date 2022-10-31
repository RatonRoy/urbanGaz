import React, { useState } from 'react';
import './MainNavbar.css';
import logo from '../../../assets/img/main-logo (1) copy.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import {RiArrowDownSLine } from 'react-icons/ri';


const MainNavbar = () => {
	const [color, setColor] = useState(false);
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const changeColor = () => {
		if (window.scrollY >= 100) {
		  setColor(true);
		} else {
		  setColor(false);
		}
	  }; 
	  
	window.addEventListener("scroll", changeColor);
	
	return (
		<>
			<header className={color ? "header-container color" : "header-container"}>
				{/* logo container */}
				<div className="mobile-menu">
				<div className="logo-container">
						<Link to="/">
						<img src= {logo} alt="" className="logo-img"/>
					</Link>
				</div>
				<div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#0a9259", cursor: "pointer" }} />
          ) : (
            <FaBars size={20} style={{ color: "#0a9259", cursor: "pointer" }} />
          )}
        </div>
				</div>
				{/* navbar container */}
				<ul className= {click ? "navbar-container active" : "navbar-container"}>
					<li className='menu-list team-list'>
						<Link to = "/team" className='menu-link' onClick={handleClick}> Team </Link>
					</li>
					<li className='menu-list hover-menu'>
						<Link to = "/" className='menu-link'>Offerings 
						 <span> <RiArrowDownSLine></RiArrowDownSLine> </span>
						</Link>
						<ul className="sub-menu-container">
							<li className='sub-menu-list'>
								<Link to="/services/gazmanagement" className='submenulink' onClick={handleClick}>Gaz Management
								</Link>
							</li>
							<li className='sub-menu-list'>
								<Link to="/gazdistribution" className='submenulink' onClick={handleClick}>Gaz Distribution
								</Link>
							</li>
							<li className='sub-menu-list'>
								<Link to="/services/smartbilling" className='submenulink' onClick={handleClick}> Smart Billing
								</Link>
							</li>
							<li className='sub-menu-list'>
								<Link to="/services/schedulemaintenance" className='submenulink' onClick={handleClick}>Schedule Maintenance
								</Link>
							</li>
						</ul>
					</li>
					<li className='menu-list'>
						<Link to="/" className='menu-link' onClick={handleClick}>
							User room
						</Link>
					</li>
					<li className='menu-list'>
						<Link to="/contact" className='menu-link' onClick={handleClick}>
							Contact
						</Link>
					</li>
				</ul>
				
			</header>
		</>
	);
};

export default MainNavbar;