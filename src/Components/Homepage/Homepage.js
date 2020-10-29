import React from "react";
import styles from "./Homepage.css";
import Header from "./Header/Header";
import Home from "./Home/Home";

function Homepage() {
  return (
    <div className={styles.Homepage}>
      <Header />
      <div className={styles.siteBody}>
        <aside1>aside1</aside1>
        <div>
          <Home />
        </div>
        <aside2>aside2</aside2>
      </div>
    </div>
  );
}
export default Homepage;
