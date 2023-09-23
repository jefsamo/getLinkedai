import "./timeline.css";
import Starpurple from "/starpurple.png";

const Timeline = () => {
  return (
    <div className="timeline" id="timeline">
      <h1 className="t-h1">Timeline</h1>
      <p className="t-paragraph">
        Here is the breakdown of the time we <br /> anticipate using for the
        upcoming event.
      </p>
      <img src={Starpurple} alt="" />
      <div className="timeline-row">
        <div className="left-timeline">
          <h1 className="odd-header">Hackathon Announcement</h1>
          <p className="odd-paragraph">
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </p>
        </div>
        <div className="center-timeline">
          <div className="center-line"></div>
          <div className="number">1</div>
        </div>
        <div className="right-timeline">
          <p className="odd-paragraph">November 18, 2023</p>
        </div>
      </div>
      <div className="timeline-row">
        <div className="left-timeline">
          <p className="even-paragraph">November 18, 2023</p>
        </div>
        <div className="center-timeline">
          <div className="center-line"></div>
          <div className="number">2</div>
        </div>
        <div className="right-timeline">
          <h1 className="even-header">Teams Registration begins</h1>
          <p className="even-paragraph">
            Interested teams can now show their interest in the getlinked tech
            hackathon 1.0 2023 by proceeding to register
          </p>
        </div>
      </div>
      <div className="timeline-row">
        <div className="left-timeline">
          <h1 className="odd-header">Teams Registration ends</h1>
          <p className="odd-paragraph">
            Interested Participants are no longer Allowed to register
          </p>
        </div>
        <div className="center-timeline">
          <div className="center-line"></div>
          <div className="number">3</div>
        </div>
        <div className="right-timeline">
          <p className="odd-paragraph">November 18, 2023</p>
        </div>
      </div>
      <div className="timeline-row">
        <div className="left-timeline">
          <p className="even-paragraph">November 18, 2023</p>
        </div>
        <div className="center-timeline">
          <div className="center-line"></div>
          <div className="number">4</div>
        </div>
        <div className="right-timeline">
          <h1 className="even-header">
            Announcement of the accepted teams and ideas
          </h1>
          <p className="even-paragraph">
            All teams whom idea has been accepted into getlinked tech hackathon
            1.0 2023 are formally announced
          </p>
        </div>
      </div>
      <div className="timeline-row">
        <div className="left-timeline">
          <h1 className="odd-header">
            Getlinked Hackathon 1.0 Offically Begins
          </h1>
          <p className="odd-paragraph">
            Accepted teams can now proceed to build their ground breaking skill
            driven solutions
          </p>
        </div>
        <div className="center-timeline">
          <div className="center-line"></div>
          <div className="number">5</div>
        </div>
        <div className="right-timeline">
          <p className="odd-paragraph">November 18, 2023</p>
        </div>
      </div>
      <div className="timeline-row">
        <div className="left-timeline">
          <p className="even-paragraph">November 18, 2023</p>
        </div>
        <div className="center-timeline">
          <div className="center-line"></div>
          <div className="number">6</div>
        </div>
        <div className="right-timeline">
          <h1 className="even-header">Demo Day</h1>
          <p className="even-paragraph">
            Teams get the opportunity to pitch their projects to judges. The
            winner of the hackathon will also be announced on this day
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
