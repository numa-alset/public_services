import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import HelpContainer from "./HelpContainer";
import LinkContainer from "./LinkContainer";
import styles from "../css/FrameComponent2.module.css";
const Home2 = () => {
  return (
    <div className={styles.homeParent}>
      <div className={styles.home}>
        <div className={styles.tereWeb} />
        <HelpContainer />
        <img
          className={styles.onTheWayPana1}
          alt=""
          src="/on-the-waypana-1.svg"
        />
        <div className={styles.homeChild} />
        <Link className={styles.singupNow} to="/signup">
          Singup now
        </Link>
        <Link className={styles.homeItem} to="/" />
        <Link className={styles.loginNow} to="login">
          Login now
        </Link>
        <div className={styles.helpMeIsContainer}>
          <p className={styles.helpMeIs}>HELP ME is a website</p>
          <p className={styles.helpMeIs}>that provides some</p>
          <p className={styles.helpMeIs}>general services to</p>
          <p className={styles.helpMeIs}>all users</p>
        </div>
        <div className={styles.whatIsTheContainer}>
          <p className={styles.helpMeIs}>What is the services</p>
          <p className={styles.helpMeIs}>
            <span>{`that `}</span>
            <span className={styles.helpMe}>Help Me</span>
            <span className={styles.provides}> provides</span>
          </p>
        </div>
        <div className={styles.itsSimpleAnd}>
          Its simple and its free way to find almost any location you necessary
          want
        </div>
        <div className={styles.helpMeParent}>
          <b className={styles.helpMe1}>Help ME</b>
          <img className={styles.helpMeLogo} alt="" src="/help-me-logo1.svg" />
        </div>
        <div className={styles.helpMeBenefitsContainer}>
          <span className={styles.helpMe2}>Help Me</span>
          <span> BENEFITS</span>
        </div>
        <div className={styles.homeInner} />
        <div className={styles.div}>01.</div>
        <div className={styles.youCanSearch}>
          You can search in a faster way through advanced filters.
        </div>
        <div className={styles.saveALotContainer}>
          <p className={styles.helpMeIs}>Save</p>
          <p className={styles.helpMeIs}>a lot of time</p>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.div1}>02.</div>
        <div className={styles.byUsingOur}>
          By using our free services to find everything you need with one click.
        </div>
        <div className={styles.saveCash}>
          <p className={styles.helpMeIs}>Save</p>
          <p className={styles.helpMeIs}>cash</p>
        </div>
        <div className={styles.homeChild1} />
        <div className={styles.div2}>03.</div>
        <div className={styles.updatedInformation247Container}>
          <p className={styles.helpMeIs}>{`Updated `}</p>
          <p className={styles.helpMeIs}>information 24/7</p>
        </div>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
        <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
        <div className={styles.allThePlaces}>
          All the places you will find are real and valid.
        </div>
        <div className={styles.frameParent}>
          <Link className={styles.rectangleParent} to="map">
            <Link className={styles.frameChild} to="map" />
            <div className={styles.tryItOut}>Try it out</div>
          </Link>
          <Link className={styles.loginWrapper} to="login">
            <div className={styles.login}>Login</div>
          </Link>
        </div>
        <img className={styles.homeChild2} alt="" src="/frame-3722.svg" />
        <LinkContainer />
      </div>
    </div>
  );
};

export default Home2;
