import "./partners.css";
import LibertyAssured from "/LibertyAssured.png";
import Liberty from "/Liberty.png";
import Winwise from "/Winwise.png";
import Wisper from "/Wisper.png";
import Paybox from "/Paybox.png";
import Vuzual from "/Vuzual.png";

const Partners = () => {
  return (
    <div className="partners">
      <h1>Partners and Sponsors</h1>
      <p>
        Getlinked Hackathon 1.0 is honored to have the following <br /> major
        companies as its partners and sponsors
      </p>

      <div className="sponsors">
        <div className="inner-sponsors">
          <div className="border-sponsor">
            <div className="top-sponsor">
              <div className="sponsor-border">
                <img src={LibertyAssured} alt="" />
              </div>
              <div className="sponsor-border">
                <div className="vertical-rule"></div>
              </div>
              <div className="sponsor-border">
                <img src={Liberty} alt="" className="liberty" />
              </div>
              <div className="sponsor-border">
                <div className="vertical-rule"></div>
              </div>

              <div className="sponsor-border">
                <img src={Winwise} alt="" />
              </div>
            </div>
          </div>
          <div className="bottom-sponsor">
            <div className="bottom-sponsor-border">
              <img src={Wisper} alt="" />
            </div>
            <div className="bottom-sponsor-border">
              <div className="vertical-rule"></div>
            </div>
            <div className="bottom-sponsor-border">
              <img src={Paybox} alt="" />
            </div>
            <div className="bottom-sponsor-border">
              <div className="vertical-rule"></div>
            </div>
            <div className="bottom-sponsor-border">
              <img src={Vuzual} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
