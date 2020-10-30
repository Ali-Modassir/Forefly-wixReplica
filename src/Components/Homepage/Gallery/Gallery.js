import React from "react";
import styles from "./Gallery.css";
import pic1 from "../../../assets/pic1.jpg";
import pic2 from "../../../assets/pic2.jpg";
import pic3 from "../../../assets/pic3.png";
import pic4 from "../../../assets/pic4.jpg";
import pic5 from "../../../assets/pic5.jpg";
import pic6 from "../../../assets/pic6.jpg";

const Gallery = () => {
  let imagesArr = [];
  imagesArr.push(pic1);
  imagesArr.push(pic2);
  imagesArr.push(pic3);
  imagesArr.push(pic4);
  imagesArr.push(pic5);
  imagesArr.push(pic6);

  return (
    <div className={styles.Gallery}>
      <div className={styles.heading}>
        <h4>GALLERY</h4>
      </div>
      <div className={styles.row}>
        <img
          className={styles.Galleryimage}
          src={imagesArr[Math.floor(Math.random() * imagesArr.length)]}
          alt="randomPics"
        />
        <img
          className={styles.Galleryimage}
          src={imagesArr[Math.floor(Math.random() * imagesArr.length)]}
          alt="randomPics"
        />
        <img
          className={styles.Galleryimage}
          src={imagesArr[Math.floor(Math.random() * imagesArr.length)]}
          alt="randomPics"
        />
      </div>
    </div>
  );
};

export default Gallery;
