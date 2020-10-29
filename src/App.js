import React, { Component } from "react";
import styles from "./App.css";
import Homepage from "./Components/Homepage/Homepage";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Homepage />
      </div>
    );
  }
}

export default App;
