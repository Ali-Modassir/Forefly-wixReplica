import React from "react";
import styles from "./Homepage.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";
import ThingsToDo from "./See&Do/ThingsToDo";
import Contact from "./ContactUs/ContactUs";
// import Map from "./Footer/Maps/Maps";
import Review from "./Reviews/Reviews";
import Footer from "./Footer/Footer";

function Homepage() {
  return (
    <div className={styles.Homepage}>
      <Header />
      <div className={styles.siteBody}>
        <aside1>aside1</aside1>
        <div>
          <Home />
          <About />
          <Services />
          <Gallery />
          <ThingsToDo />
          <Review />
        </div>
        <aside2>aside2</aside2>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
export default Homepage;
