import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import styles from "./Maps.css";
class Footer extends Component {
  render() {
    const style = {
      width: "100%",
      height: "300px",
    };

    const containerStyle = {
      position: "absolute",
      width: "100%",
      height: "300px",
      backgroundColor: "black",
    };

    return (
      <div className={styles.siteFooter}>
        <footer>
          <Map
            google={this.props.google}
            zoom={10}
            initialCenter={{
              lat: 35.5496939,
              lng: -120.7060049,
            }}
            style={style}
            containerStyle={containerStyle}
          />
        </footer>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDrTTV6Dwmxf8cuC9KU-AO3ASHeRfs2kcE",
})(Footer);
