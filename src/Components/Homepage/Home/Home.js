import React from "react";
import styles from "./Home.css";
import pic from "../../../assets/pic2.jpg";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.company}>
        <h1 style={{ margin: "4px" }}>
          <span className={styles.name}>Ferofly</span>
        </h1>
        <span className={styles.tagline}>-Magnify your Journey-</span>
      </div>
      <div className={styles.image}>
        <img src={pic} alt="room" />
      </div>
      <div className={styles.form}>
        <div className={styles.input}>
          <span className={styles.inputType}>Check In</span>
          <input className={styles.date} type="date" placeholder="heelo" />
        </div>
        <div className={styles.input}>
          <span className={styles.inputType}>Check Out</span>
          <input className={styles.date} type="date" />
        </div>
        <div className={styles.input}>
          <span className={styles.inputType}>Adults</span>
          <input className={styles.number} type="number" />
        </div>
        <div className={styles.input}>
          <span className={styles.inputType}>Kids</span>
          <input className={styles.number} type="number" />
        </div>
        <div className={styles.input}>
          <div>.</div>
          <button className={styles.inputSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
