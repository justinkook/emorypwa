import React, { Component } from 'react';
import IconAvatars from './components/material/IconAvatars';
import DetailedExpansionPanel from './components/material/DetailedExpansionPanel';
import MenuView from './components/screens/MenuView';

class App extends Component {
  styles = {
    resultsContainer: {
      padding: .8 + 'em',
      marginTop: 10.6 + 'em',
    }
  }

  render() {
    return (
      <div className="App">
        <MenuView />
        <div style={this.styles.resultsContainer}>
          <DetailedExpansionPanel IconAvatars={<IconAvatars />} />
        </div>
      </div>
    );
  }
}

export default App;
