import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../assets/img/logo-01.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import * as Scroll from 'react-scroll';

const Navbar = (props) => {
	let LinkS = Scroll.Link;
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
						<LinkS to="offerings"
							spy={true} smooth={false} offset={-40} 
							className='menu-link'
						onClick={props.handleSmoothClick}
						>
							Offerings
							
						</LinkS>
						
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