import "./home.css";
import Star from "/star.png";
import Bulb from "/bulb.png";
import Bulb2 from "/bulb2.png";
import Chain from "/chain.png";
import Chain2 from "/chain2.png";
import Spark from "/spark.png";
import Spark2 from "/spark2.png";
import Rule from "/rule.png";
import Rule2 from "/rule2.png";
import Man from "/man.png";
import Universe from "/universe.png";
import Hackathon from "/Hackathon.png";

import BigIdea from "/bigIdea.png";
import BigIdea2 from "/bigIdea2.png";
import Arrow from "/arrow.png";
import Arrow2 from "/arrow2.png";
import StarGra from "/stargra.png";
import Starpurple from "/starpurple.png";
import LadySitting from "/ladysitting.png";
import Star2 from "/star-2.png";
import Ellipse from "/Ellipse.png";
import ChartHuman from "/chartHuman.png";
import Thought from "/thought.png";

import Button from "../../components/Button/Button";
import HorizontalRule from "../../components/HorizontalRule/HorizontalRule";
import Note from "../../components/Note/Note";
import Accordion from "../../components/Accordion/Accordion";
import { faqs } from "../../utils/constant";
import Timeline from "../../components/Timeline/Timeline";
// import Prize from "../../components/Prize/Prize";
import Partners from "../../components/Partners/Partners";
import Privacy from "../../components/Privacy/Privacy";
import Footer from "../../components/Footer/Footer";
import Prize from "../../components/Prize/Prize";

const Home = () => {
  return (
    <>
      <div className="total-app">
        <div className="home">
          <div className="left-home">
            <img src={Star} alt="" className="home-star" />

            <div className="getLinked">
              <img src={Bulb} alt="Bulb" className="bulb" />
              <div className="getTechContainer">
                <h2 className="getTech">getlinked Tech</h2>
                <div className="kathon">
                  <h2 className="getTech">
                    Hackathon <span className="version">1.0</span>
                  </h2>
                  <span>
                    <img src={Chain} alt="" className="chain" />
                  </span>
                  <span>
                    <img src={Spark} alt="" className="chain" />
                  </span>
                </div>
                <p>
                  Participate in getlinked tech Hackathon 2023 stand a chance to
                  win a Big prize
                </p>
                <Button>Register</Button>
                <div className="timer">
                  <h1>
                    00<span>H</span>
                  </h1>
                  <h1>
                    00<span>M</span>
                  </h1>
                  <h1>
                    00<span>S</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="right-home">
            <h1>Igniting a Revolution in HR Innovation</h1>
            <img src={Rule} alt="" className="rule" />
            <div className="right-home-container">
              <img src={Man} alt="" />
              <img src={Universe} alt="" className="universe" />
            </div>
          </div>
        </div>
        <HorizontalRule />
        <div className="container">
          <div className="left-hack">
            <img src={BigIdea} alt="" />
            <img src={StarGra} alt="" className="gra" />
            <img src={Arrow} alt="" className="arrow" />
          </div>
          <div className="right-hack">
            <img src={Starpurple} alt="" className="star-purple" />
            <h1>
              Introduction to getlinked
              <br />
              <span className="tech1">tech Hackathon 1.0</span>
            </h1>
            <Note />
          </div>
        </div>
        <HorizontalRule />
        <div className="container">
          <div className="left-guildlines">
            <h1>
              Rules and <br />
              <span className="guides">Guidelines</span>
            </h1>
            <Note />
          </div>
          <div className="right-guildlines">
            <img src={LadySitting} alt="" />
          </div>
        </div>
        <HorizontalRule />
        <div className="container">
          <div className="left-attributes">
            <img src={Starpurple} alt="" className="attr-star" />

            <div className="chart-human-container">
              <img src={Ellipse} alt="" className="ellipse" />
              <img src={ChartHuman} alt="" className="chart-human" />
            </div>
            <img src={Star2} alt="" className="attr-star2" />
          </div>
          <div className="right-attributes">
            <h1>
              Judging Criteria <br />
              <span className="span-attr">Key attributes</span>
            </h1>
            <p className="attr-p">
              <span className="key-p">Innovation and Creativity: </span>Evaluate
              the uniqueness and creativity of the solution. Consider whether it
              addresses a real-world problem in a novel way or introduces
              innovative features.
            </p>
            <p className="attr-p">
              <span className="key-p">Functionality: </span>Assess how well the
              solution works. Does it perform its intended functions effectively
              and without major issues? Judges would consider the completeness
              and robustness of the solution.
            </p>
            <p className="attr-p">
              <span className="key-p">Impact and Relevance: </span>Determine the
              potential impact of the solution in the real world. Does it
              address a significant problem, and is it relevant to the target
              audience? Judges would assess the potential social, economic, or
              environmental benefits.
            </p>
            <p className="attr-p">
              <span className="key-p">Adherence to Hackathon Rules: </span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>

            <Button>Read More</Button>
          </div>
        </div>
        <HorizontalRule />
        <div className="container">
          <div className="left-faq">
            <img src={Starpurple} alt="" />
            <div className="left-faq-inner">
              <h1>
                Frequently Ask <br /> <span className="faq">Question</span>
              </h1>
              <p>
                We got answers to the questions that you might want to ask about
                getlinked Hackathon 1.0
              </p>
              <Accordion data={faqs} />
            </div>
          </div>
          <div className="right-faq">
            <img src={Thought} alt="" />
          </div>
        </div>
        <HorizontalRule />
        <Timeline />
        <Prize />
        <Partners />
        <HorizontalRule />
        <Privacy />
        <Footer />
      </div>
      <div className="home-mobile">
        <div className="ignite">
          <h1 className="ignite-h1">Igniting a Revolution in HR Innovation</h1>
          <img src={Rule2} alt="" className="rule2" />

          <div className="getLinkedMobile">
            <img src={Bulb2} alt="" className="bulb2" />
            <h1 className="geth1">getlinked Tech</h1>
            <h1 className="geth2">
              Hackathon <span className="one2">1.0</span>
              <span>
                <img src={Chain2} alt="" />
              </span>
              <span>
                <img src={Spark2} alt="" />
              </span>
            </h1>
            <div className="participate-container">
              <p>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
            </div>

            <Button>Register</Button>
            <div className="timer-container">
              <div className="timer-mobile">
                <h1>
                  00
                  <span>H</span>
                </h1>
                <h1>
                  00
                  <span>M</span>
                </h1>
                <h1>
                  00
                  <span>S</span>
                </h1>
              </div>
            </div>
            <img src={Hackathon} alt="" className="mobile-hackathon" />
          </div>
        </div>

        <div className="tech-hack-mobile">
          <div>
            <img src={BigIdea2} alt="" />
          </div>
          <img src={Arrow2} alt="" />
          <h2>
            Introduction to getlinked
            <br />
            <span className="thack"> tech Hackathon 1.0</span>
          </h2>
          <div className="p-container">
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
          <HorizontalRule />
          <div className="mobile-rules">wal</div>
        </div>
      </div>
    </>
  );
};

export default Home;
