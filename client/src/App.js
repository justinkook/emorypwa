import React, { Component } from "react";
import MenuView from "./components/screens/MenuView";
import DetailedExpansionPanel from "./components/material/DetailedExpansionPanel";
import { ResultContext } from "./components/utils/ContextApi";
import CustomizedSnackbars from "./components/utils/addToHome";
import Main from "./components/screens/Main";

const popupOnce = localStorage.getItem("popupStatus");
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
    if (isIos() && !isInStandaloneMode() && !popupOnce) {
      this.setState({
        showInstallMessage: true
      });
      localStorage.setItem("popup", true);
    }
  };

  render() {
    return (
      <ResultContext.Consumer>
        {context => (
          <div className="App">
            <Main context={context} />
            {/* <MenuView context={context} />
            <div style={this.styles.resultsContainer}>
              <DetailedExpansionPanel />
            </div> */}
            {this.state.showInstallMessage ? <CustomizedSnackbars /> : null}
          </div>
        )}
      </ResultContext.Consumer>
    );
  }
}

export default App;
