import React, { Component } from 'react'
import MenuView from './components/screens/MenuView'
import LabelBottomNavigation from './components/material/BottomNav'
import DetailedExpansionPanel from './components/material/DetailedExpansionPanel'
import { ResultContext } from './components/utils/ContextApi'

class App extends Component {
  styles = {
    resultsContainer: {
      padding: 0.8 + 'em',
      marginTop: 4.6 + 'em'
    }
  }

  render () {
    return (
      <ResultContext.Consumer>
        {context => (
          <div className='App'>
            <MenuView context={context} />
            <div style={this.styles.resultsContainer}>
              <DetailedExpansionPanel />
            </div>
            <LabelBottomNavigation value={'search'} />
          </div>
        )}
      </ResultContext.Consumer>
    )
  }
}

export default App
