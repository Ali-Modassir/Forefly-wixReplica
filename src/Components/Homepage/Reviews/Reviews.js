import React, { useState } from "react";
import styles from "./Reviews.css";
// import pic2 from "../../../assets/pic2.jpg";
import { BsDot } from "react-icons/bs";

function Reviews() {
  const [count, setCount] = useState(0);

  let review = [];
  review.push(
    <div className={styles.roomtagline}>
      <p>I'm a paragraph. Click here to add your own text and edit me.”</p>
    </div>
  );
  review.push(
    <div className={styles.roomtagline}>
      <p>
        “I'm a paragraph. Click here to add your own text and edit me. I’m a
        great place for you to tell a story and let your users know a little
        more about you.”
      </p>
    </div>
  );
  review.push(
    <div className={styles.roomtagline}>
      <p>
        “I'm a testimonial. Click to edit me and add text that says something
        nice about you and your services.”
      </p>
    </div>
  );

  setInterval(() => {
    setCount(Math.floor(Math.random() * review.length));
  }, 6000);

  return (
    <div className={styles.Reviews}>
      <div className={styles.reviewContainer}>
        <div className={styles.roomCard}>
          <div className={styles.roomHeading}>
            <h4>GUEST REVIEW</h4>
          </div>
          <div className={styles.reviewlogo}>
            <wix-image
              style={{ width: "21px", height: "25px", top: "0", left: "0" }}
              data-has-bg-scroll-effect=""
              data-image-info='{"imageData":{"type":"Image","id":"dataItem-ipwnvy821","metaData":{"pageId":"c1dmp","isPreset":true,"schemaVersion":"2.0","isHidden":false},"title":"","uri":"a9ff3b_e630dab1211b433ba1955369e2f15c16.png","description":"","width":38,"height":32,"alt":"","displayMode":"full"},"containerId":"comp-ipwnvy82","displayMode":"full"}'
              data-has-ssr-src=""
              data-is-svg="false"
              data-is-svg-mask="false"
              id="comp-ipwnvy82img"
              className="ca1img"
              data-src="https://static.wixstatic.com/media/a9ff3b_e630dab1211b433ba1955369e2f15c16.png/v1/fill/w_21,h_18,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_e630dab1211b433ba1955369e2f15c16.webp"
            >
              <img
                id="comp-ipwnvy82imgimage"
                style={{
                  objectPosition: "center center",
                  width: "21px",
                  height: "25px",
                  objectFit: "contain",
                }}
                alt=""
                data-type="image"
                itemprop="image"
                src="https://static.wixstatic.com/media/a9ff3b_e630dab1211b433ba1955369e2f15c16.png/v1/fill/w_21,h_18,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_e630dab1211b433ba1955369e2f15c16.webp"
              />
            </wix-image>
          </div>
          {review[count]}
          <div
            className={styles.buttons}
            onClick={() => setCount(Math.floor(Math.random() * review.length))}
          >
            <div className={styles.dots}>
              <BsDot />
            </div>
            <div className={styles.dots}>
              <BsDot />
            </div>
            <div className={styles.dots}>
              <BsDot />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
