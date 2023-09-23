import Cup from "/cup.png";
import Starpurple from "/starpurple.png";
import Medals from "/medals.png";
import "./price.css";

const Prize = () => {
  return (
    <div className="prize-container">
      <div className="left-prize">
        <img src={Starpurple} alt="" className="star-purp" />
        <img src={Cup} alt="Winning Cup" className="winning-cup" />
      </div>
      <div className="right-prize">
        <div className="prize-title">
          <h1 className="prize-heading">
            Prizes and <br /> <span className="rewards">Rewards</span>
          </h1>
          <p className="highlight">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>

        <div className="medal-rank">
          <img src={Medals} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Prize;
