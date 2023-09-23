import "./register2.css";
import GraphicDesigner from "/graphic-designer.png";
import Male from "/male.png";
import Female from "/female.png";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="register">
        <div className="left-register">
          <img src={GraphicDesigner} alt="Graphics" className="graphics" />
        </div>
        <div className="right-register">
          <div className="right-register-content">
            <h1 className="regis">Register</h1>
            <div className="movement">
              <p className="part">Be part of this movement!</p>
              <div className="move">
                <img src={Female} alt="Female walking image" />
                <img src={Male} alt="Male walking image" />
              </div>
            </div>
            <h1 className="create-account">Create your Account</h1>
            <div className="form-field">
              <div className="horizontal-field">
                <div className="left-field">
                  <p>Team's Name</p>
                  <input
                    type="text"
                    placeholder="Enter the name of your group"
                  />
                </div>
                <div className="left-field">
                  <p>Email</p>
                  <input type="text" placeholder="Enter your email address" />
                </div>
              </div>
              <div className="horizontal-field">
                <div className="left-field">
                  <p>Phone</p>
                  <input type="text" placeholder="Enter your phone number" />
                </div>
                <div className="left-field">
                  <p>Project Topic</p>
                  <input
                    type="text"
                    placeholder="What is your group project topic"
                  />
                </div>
              </div>
              <div className="horizontal-field">
                <div className="left-field">
                  <p>Category</p>
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Wale</option>
                    <option value="">Wale</option>
                  </select>
                </div>
                <div className="left-field">
                  <p>Group Size</p>
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Wale</option>
                    <option value="">Wale</option>
                  </select>
                </div>
              </div>
            </div>
            <p className="review-reg">
              Please review your registration details before submitting
            </p>

            <div className="tc">
              <input type="checkbox" name="" id="" />
              <p>
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>
            <div
              className="register-button"
              onClick={() => setShowModal(!showModal)}
            >
              <Button>Register Now</Button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal />}
    </>
  );
};

export default Register;
