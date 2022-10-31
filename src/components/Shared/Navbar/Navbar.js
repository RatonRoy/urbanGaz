import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../../assets/img/main-logo (1) copy.png';
// import './Navbar.css';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  /* if (window.scrollY >= 100) {
    setColor(true);
  } else {
    setColor(false);
  } */
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
      <div className={color ? "header header-bg" : "header"} >
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className = {click ? "nav-menu active" : "nav-menu"}>
          <li className= "menu-list">
            <Link to="/team" className = "menu-link"> Team </Link>
          </li>
          <li className= "menu-list">
            <Link to="/" className="menu-link offering"> Offerings
              {/* <div className="sub-menu-container">
                <Link to = "/"> One </Link>
                <Link to = "/"> Two </Link>
                <Link to = "/"> Three </Link>
                <Link to = "/"> Four </Link>
              </div> */}
            </Link>
           {/*  <ul className="offering-sub-menu-container">
              <li className="offering-sub-menu">
                <Link to="/" className="sub-menu-link">	Gaz Management </Link>
              </li>
              <li className="offering-sub-menu">
                <Link to="/" className="sub-menu-link">Gaz Distribution</Link>
              </li>
              <li className="offering-sub-menu">
                <Link to="/" className="sub-menu-link">	Smart Billing </Link>
              </li>
              <li className="offering-sub-menu">
                <Link to="/" className="sub-menu-link">Schedule Maintenance</Link>
              </li>
            </ul>   */}
          
          </li>
          <li className= "menu-list">
            <Link to="/" className = "menu-link">User room</Link>
          </li>
          <li className= "menu-list">
            <Link to="/contact" className = "menu-link" onClick={handleClick} >Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#0a9259", cursor: "pointer" }} />
          ) : (
            <FaBars size={20} style={{ color: "#0a9259", cursor: "pointer" }} />
          )}
        </div>
      </div>
    </>
  );
};
export default Navbar;

