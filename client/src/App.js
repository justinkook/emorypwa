import React, { Component } from "react";
import CustomizedSnackbars from "./components/utils/addToHome";
import TabBar from "./components/material/TabContainer";

class App extends Component {
  state = {
    showInstallMessage: false
  };

  styles = {
    resultsContainer: {
      padding: 0.8 + "em",
      marginTop: 4.6 + "em"
    }
  };

  componentDidMount = () => {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      "standalone" in window.navigator && window.navigator.standalone;

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      this.setState({
        showInstallMessage: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        <TabBar />
        {this.state.showInstallMessage ? <CustomizedSnackbars /> : null}
      </div>
    );
  }
}

export default App;
