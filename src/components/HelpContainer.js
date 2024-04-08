import { FunctionComponent } from "react";
import styles from "../css/HelpContainer.module.css";
const HelpContainer = () => {
  return (
    <div className={styles.footer16White}>
      <div className={styles.footerUi}>
        <div className={styles.alyeskaResor}>
          © 2023 IT_Project_Y4 | All Rights Reserved
        </div>
        <div className={styles.learnMore}>
          <div className={styles.div}>Learn More</div>
          <div className={styles.aboutAlyeskaPressContainer}>
            <p className={styles.aboutUs}>About us</p>
            <p className={styles.aboutUs}>Environment</p>
            <p className={styles.aboutUs}>Jobs</p>
            <p className={styles.aboutUs}>Privacy Policy</p>
            <p className={styles.aboutUs}>Contact Us</p>
          </div>
        </div>
        <div className={styles.contactUs1}>
          <div className={styles.contactUs2}>Contact Us</div>
          <div className={styles.frameParent}>
            <div className={styles.hotelReservationParent}>
              <div className={styles.hotelReservation}>Front-end:</div>
              <div className={styles.div}>09XXXXXXX</div>
            </div>
            <div className={styles.ticketOfficeParent}>
              <div className={styles.hotelReservation}>Back-end:</div>
              <div className={styles.div}>09XXXXXXXX</div>
            </div>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.div}>Social</div>
          <img className={styles.socialChild} alt="" src="/group-52.svg" />
        </div>
        <div className={styles.divider} />
        <div className={styles.helpMeParent}>
          <b className={styles.helpMe}>Help ME</b>
          <img className={styles.helpMeLogo} alt="" src="/help-me-logo.svg" />
        </div>
      </div>
    </div>
  );
};

export default HelpContainer;
