import React from "react";
import styles from "./ContactUs.css";

function ContactUs() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactUs}>
        <div className={styles.heading}>
          <h4>CONTACT US</h4>
        </div>
        <div className={styles.details}>
          <a
            class="auto-generated-link"
            data-auto-recognition="true"
            data-content="info@mysite.com"
            href="mailto:info@mysite.com"
            data-type="mail"
          >
            info@mysite.com
          </a>
          <div>/</div>
          <div className={styles.address}>
            500 Terry Francois Street, San Francisco, CA 94158
          </div>
          <div>/</div>
          <div className={styles.number}>Tel: 123-456-7890</div>
        </div>
        <div className={styles.form}>
          <div className={styles.Text}>
            <input
              className={styles.input}
              type="text"
              placeholder="Name*"
            ></input>
          </div>
          <div className={styles.Email}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email*"
            ></input>
          </div>
          <div className={styles.Subject}>
            <input
              className={styles.input}
              type="text"
              placeholder="Subject"
            ></input>
          </div>
          <div className={styles.Message}>
            <input
              className={styles.input}
              type="text"
              placeholder="Message"
            ></input>
          </div>
          <div className={styles.inputBtn}>
            <button class={styles.btn}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
