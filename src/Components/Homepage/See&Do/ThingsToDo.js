import React from "react";
import styles from "./ThingsToDo.css";
import Cards from "../Services/Cards/Cards";

function ThingsToDo() {
  return (
    <div className={styles.ThingsToDo}>
      <div className={styles.heading}>
        <h4>THINGS TO DO</h4>
      </div>
      <div className={styles.Cards}>
        <Cards type="Wineries Tour" />
        <Cards type="Cultural Sites" />
        <Cards type="Market Tour" />
        <Cards type="Leisure Activities" />
        <Cards type="Birds Safari" />
        <Cards type="Horse Riding" />
      </div>
    </div>
  );
}

export default ThingsToDo;
