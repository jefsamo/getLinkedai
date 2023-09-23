import "./contact.css";
import Facebook from "/facebook.png";
import Twitter from "/twitter.png";
import Linkedin from "/linkedin.png";
import Instagram from "/instagram.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Contact = () => {
  return (
    <div className="contact">
      <div className="left-contact">
        <h1>Get in touch</h1>
        <p className="info">
          Contact <br /> Information
        </p>
        <p className="info">
          27,Alara Street <br /> Yaba 100012 <br />
          Lagos State
        </p>
        <p className="info">Call Us : 07067981819</p>
        <p className="info">
          we are open from Monday-Friday <br />
          08:00am - 05:00pm
        </p>

        <p className="share">Share on</p>
        <div className="social-links">
          <Link to="">
            <img src={Instagram} alt="Instagram" />
          </Link>
          <Link to="">
            <img src={Twitter} alt="Twitter" />
          </Link>
          <Link to="">
            <img src={Facebook} alt="Facebook" />
          </Link>
          <Link to="">
            <img src={Linkedin} alt="Linkedin" />
          </Link>
        </div>
      </div>
      <div className="right-contact">
        <div className="right-contact-content">
          <h1>Questions or need assistance?</h1>
          <h1>Let us know about it!</h1>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Mail" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <div className="contact-button">
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
