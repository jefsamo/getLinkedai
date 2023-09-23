import "./privacy.css";
import HumanLock from "/human-lock.png";
import Checkmark from "/checkmark.png";
import Button from "../Button/Button";

const Privacy = () => {
  return (
    <div className="container">
      <div className="left-privacy">
        <h1>
          Privacy Policy and
          <br /> <span>Terms</span>
        </h1>
        <p className="updated-last">Last updated on September 12, 2023</p>
        <p className="below-privacy">
          Below are our privacy & policy, which outline a lot of goodies. <br />
          it’s our aim to always take of our participant
        </p>

        <div className="licensing">
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h2>Licensing Policy</h2>
          <p className="standard-license">
            Here are terms of our Standard License:
          </p>
          <div className="license-details">
            <div className="left-details">
              <img src={Checkmark} alt="" />
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="left-details">
              <img src={Checkmark} alt="" />
              <p>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
          </div>
          <div className="license-button">
            <Button>Read More</Button>
          </div>
        </div>
      </div>
      <div className="right-privacy">
        <img src={HumanLock} alt="" />
      </div>
    </div>
  );
};

export default Privacy;
