import styles from "./Intro.module.css";
import StarWhite from "/star.png";
import Bulb from "/bulb.png";
import Man from "/man.png";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.leftGrid}>
        <div>
          <img src={StarWhite} alt="" className={styles.star} />
        </div>
        <div className={styles.hackathon}>
          <img src={Bulb} alt="" />
          <h1></h1>
        </div>
      </div>
      <div className={styles.rightGrid}>
        <h1>Igniting a Revolution in HR Innovation</h1>
        <img src={Man} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Intro;
