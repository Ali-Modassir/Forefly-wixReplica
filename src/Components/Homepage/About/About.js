import React from "react";
import styles from "./About.css";

function About() {
  return (
    <div className={styles.About}>
      <div className={styles.heading}>
        <h4>ABOUT</h4>
      </div>
      <div className={styles.tagline}>
        <span>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.​
        </span>
      </div>
      <div className={styles.ourRooms}>
        <div className={styles.roomCard}>
          <div className={styles.roomHeading}>
            <h4>OUR ROOMS</h4>
          </div>
          <div className={styles.roomtagline}>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
          <div className={styles.roomBtn}>
            <button>Book a Room</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
