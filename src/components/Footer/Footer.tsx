import { Link } from "react-router-dom";
import Facebook from "/facebook.png";
import Twitter from "/twitter.png";
import Linkedin from "/linkedin.png";
import Instagram from "/instagram.png";
import Phone from "/phone.png";
import Location from "/location.png";
import Logo from "../Logo/Logo";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-info">
          <div className="top-info">
            <Logo />
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organization with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="bottom-info">
            <p>Terms of Use</p>
            <p className="slash">|</p>
            <p>Privacy policy</p>
          </div>
        </div>
        <div className="useful-links">
          <h1 className="footer-header">Useful Links</h1>
          <ul>
            <li>
              <Link to="">Overview</Link>
            </li>
            <li>
              <Link to="">Timeline</Link>
            </li>
            <li>
              <Link to="">FAQs</Link>
            </li>
            <li>
              <Link to="">Register</Link>
            </li>
          </ul>
          <div className="social-links">
            <p>Follow Us</p>
            <div className="socials">
              <Link to="">
                <img src={Instagram} alt="" />
              </Link>
              <Link to="">
                <img src={Twitter} alt="" />
              </Link>
              <Link to="">
                <img src={Facebook} alt="" />
              </Link>
              <Link to="">
                <img src={Linkedin} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-contact">
          <h1 className="footer-header">Contact Us</h1>
          <div className="contact-details">
            <img src={Phone} alt="" />
            <p>+234 6707653444</p>
          </div>
          <div className="contact-details">
            <img src={Location} alt="" />
            <p>
              27, Alara Street <br />
              Yaba 10012 <br />
              Lagos State
            </p>
          </div>
        </div>
      </div>
      <div className="addendum-footer">
        All rights reserved. &copy; getlinked Ltd.
      </div>
    </div>
  );
};

export default Footer;
