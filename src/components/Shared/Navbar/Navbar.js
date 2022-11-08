import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../assets/img/logo-01.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';

const Navbar = (props) => {
	const [color, setColor] = useState(false);
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	// const {handleSmoothClick, } = props 
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
			<header className={color ? "header-container header-bg" : "header-container"}>
				{/* logo container */}
				<div className="mobile-menu">
					<div className="logo-container">
						<Link to="/" className='logo-link'>
							<img src={logo} alt="" className="logo-img" />
						</Link>
					</div>
					<div className="hamburger" onClick={handleClick}>
						{click ? (
							<FaTimes size={25} style={{ color: "#0a9259", cursor: "pointer" }} />
						) : (
							<FaBars size={25} style={{ color: "#0a9259", cursor: "pointer" }} />
						)}
					</div>
				</div>
				{/* navbar container */}
				<ul className={click ? "navbar-container active" : "navbar-container"}>
					<li className='menu-list team-list'>
						<Link to="/team" className='menu-link team' onClick={handleClick}> Team </Link>
					</li>
					<li className='menu-list hover-menu'>
						<Link to="/" className='menu-link'
						onClick={props.handleSmoothClick}
						>Offerings
							{/* <span> <RiArrowDownSLine></RiArrowDownSLine> </span> */}
						</Link>
						{/* <ul className="sub-menu-container">
							<li className='sub-menu-list'>
								<Link to="/services/gazmanagement" className='sub-menu-link' onClick={handleClick}>Gaz Management
								</Link>
							</li>
							<li className='sub-menu-list'>
								<Link to="/services/gazdistribution" className='sub-menu-link' onClick={handleClick}>Gaz Distribution
								</Link>
							</li>
							<li className='sub-menu-list'>
								<Link to="/services/smartbilling" className='sub-menu-link' onClick={handleClick}> Smart Billing
								</Link>
							</li>
							<li className='sub-menu-list'>
								<Link to="/services/schedulemaintenance" className='sub-menu-link' onClick={handleClick}>Schedule Maintenance
								</Link>
							</li>
						</ul> */}
					</li>
					<li className='menu-list'>
						<Link to="/user-room" className='menu-link' onClick={handleClick}>
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
export default Navbar;