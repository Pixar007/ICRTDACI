import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.parent}>
        <img className={styles.icon} loading="lazy" alt="" src="/2026.svg" />
        <div className={styles.icrtdaciParent}>
          <div className={styles.icrtdaci}>ICRTDACI</div>
          <div className={styles.div}>2025</div>
          <div
            className={styles.recentTrendsIn}
          >{`Recent Trends in Data Analytics & Computing Intelligence`}</div>
        </div>
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <div className={styles.about}>About</div>
        <div className={styles.board}>Board</div>
        <div className={styles.callForPapers}>Call for papers</div>
        <div className={styles.contactUs}>Contact us</div>
      </div>
      <img
        className={styles.image2Icon}
        loading="lazy"
        alt=""
        src="/image-2@2x.png"
      />
    </header>
