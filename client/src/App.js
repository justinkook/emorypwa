import React, { Component } from 'react';
import IconAvatars from './components/material/IconAvatars';
import DetailedExpansionPanel from './components/material/DetailedExpansionPanel';
import MenuView from './components/screens/MenuView';
import LabelBottomNavigation from './components/material/BottomNav';

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
        <LabelBottomNavigation value={'search'} />
      </div>
    );
  }
}

export default App;
