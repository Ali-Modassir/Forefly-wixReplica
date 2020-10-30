import React from "react";
import styles from "./Services.css";
import Cards from "./Cards/Cards";

function Services() {
  return (
    <div className={styles.Services}>
      <div className={styles.heading}>
        <h4>OUR SERVICES</h4>
      </div>
      <div className={styles.cards}>
        <Cards type="Breakfast" />
        <Cards type="Garden" />
        <Cards type="Pool" />
        <Cards type="Free Wifi" />
        <Cards type="Daily Housekeeping" />
        <Cards type="In-Room Dining Service" />
      </div>
    </div>
  );
}

export default Services;
