import React from "react";
import styles from "./Footer.css";
import Maps from "./Maps/Maps";

function Footer() {
  return (
    <div className={styles.Footer}>
      <Maps />
      <div className={styles.bottom}>
        <p>
          © 2023 by Anton & Lily. Proudly created with
          <a href="Wix.com">Wix.com</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
