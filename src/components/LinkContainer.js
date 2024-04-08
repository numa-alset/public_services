import { FunctionComponent, useCallback, useEffect } from "react";
import styles from "../css/LinkContainer.module.css";
const LinkContainer= () => {
  const onCarRepairShopClick = useCallback(() => {
    window.open("google.com");
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onHospitalClick = useCallback(() => {
    window.open("google.com");
  }, []);

  return (
    <div className={styles.booktravelParent}>
      <a className={styles.booktravel} href="map4">
        <div className={styles.booktravelChild} />
        <div className={styles.booktravelItem} />
        <div className={styles.helpMeIsContainer}>
          <p className={styles.helpMeIs}>Help me is the</p>
          <p className={styles.helpMeIs}>simplest way to find a travel</p>
        </div>
        <div className={styles.helpMe}>Help me</div>
        <img className={styles.busicon} alt="" src="/busicon.svg" />
      </a>
      <a
        className={styles.carRepairShop}
        href="map5"
        // onClick={onCarRepairShopClick}
      >
        <div className={styles.carRepairShopChild} />
        <div className={styles.helpMe1}>Help me</div>
        <div className={styles.helpMeToContainer}>
          <p className={styles.helpMeIs}>Help me find</p>
          <p className={styles.helpMeIs}>
            {" "}
            the best car repair shop for your car
          </p>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </a>
      <a className={styles.hospitalWrapper} href="/choose">
        <a
          className={styles.hospital}
          href="/choose"
          id="hospital"
          // onClick={onHospitalClick}
          data-animate-on-scroll
        >
          <a
            className={styles.hospitalChild}
            
            href="/choose"
            id="hospital"
            tabIndex={1}
          />
          <div className={styles.helpMeToContainer1}>
            <p className={styles.helpMeIs}>Help me find</p>
            <p className={styles.helpMeIs}>
              {" "}
              the nearest doctor, hospital or pharmacy
            </p>
          </div>
          <div className={styles.hospitalItem} />
          <div className={styles.helpMe2}>Help me</div>
          <img className={styles.hospitalicon} alt="" src="/hospitalicon.svg" />
        </a>
      </a>
    </div>
  );
};

export default LinkContainer;
