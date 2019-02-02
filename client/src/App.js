import React, { Component } from 'react'
import MenuView from './components/screens/MenuView'
import LabelBottomNavigation from './components/material/BottomNav'
import DetailedExpansionPanel from './components/material/DetailedExpansionPanel'

class App extends Component {
  styles = {
    resultsContainer: {
      padding: 0.8 + 'em',
      marginTop: 4.6 + 'em'
    }
  }

  render () {
    return (
      <div className='App'>
        <MenuView />
        <div style={this.styles.resultsContainer}>
          <DetailedExpansionPanel />
        </div>
        <LabelBottomNavigation value={'search'} />
      </div>
    )
  }
}

export default App
