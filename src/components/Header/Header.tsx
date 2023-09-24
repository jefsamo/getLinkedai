import Button from "../Button/Button";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { MaxContainer } from "../../App";
import Hamburger from "/hamburger.png";
import Cancel from "/cancel.png";
import "./header.css";
import { useState } from "react";
import HorizontalRule from "../HorizontalRule/HorizontalRule";

const Header = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const onClick = () => {
    navigate("/register");
    setShowNav(false);
  };
  return (
    <>
      <MaxContainer>
        <div className="header">
          <Link to="/" className="logo">
            <span className="get">get</span>
            <span className="linked">linked</span>
          </Link>
          <div className="linksContainer">
            <ul className="navList">
              <li className="navLink">
                <NavLink to="#">Timeline</NavLink>
              </li>
              <li className="navLink">
                <NavLink to="#">Overview</NavLink>
              </li>
              <li className="navLink">
                <NavLink to="#">FAQs</NavLink>
              </li>
              <li className="navLink">
                <NavLink to="#">Contact</NavLink>
              </li>
            </ul>
            <div onClick={onClick}>
              <Button>Register</Button>
            </div>
          </div>
          <div className="hamburger">
            <img
              src={showNav ? Cancel : Hamburger}
              alt=""
              className="hamburger"
              onClick={() => setShowNav(!showNav)}
            />
          </div>
        </div>
      </MaxContainer>
      {showNav && (
        <div className="mobile-nav">
          <img
            src={Cancel}
            alt=""
            className="mobile-cancel"
            onClick={() => setShowNav(false)}
          />
          <ul>
            <li onClick={() => setShowNav(false)}>
              <Link to="">Timeline</Link>
            </li>
            <li onClick={() => setShowNav(false)}>
              <Link to="">Overview</Link>
            </li>
            <li onClick={() => setShowNav(false)}>
              <Link to="">FAQs</Link>
            </li>
            <li onClick={() => setShowNav(false)}>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <div onClick={onClick}>
            <Button>Register</Button>
          </div>
        </div>
      )}
      <HorizontalRule />
    </>
  );
};

export default Header;
