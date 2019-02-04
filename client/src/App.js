import React, { Component } from 'react'
import MenuView from './components/screens/MenuView'
import LabelBottomNavigation from './components/material/BottomNav'
import DetailedExpansionPanel from './components/material/DetailedExpansionPanel'
import { ResultContext } from './components/utils/ContextApi'
import CustomizedSnackbars from './components/utils/addToHome'

class App extends Component {
  state = {
    showInstallMessage: false
  }

  styles = {
    resultsContainer: {
      padding: 0.8 + 'em',
      marginTop: 4.6 + 'em'
    }
  }

  componentDidMount = () => {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase()
      return /iphone|ipad|ipod/.test(userAgent)
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      'standalone' in window.navigator && window.navigator.standalone

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      this.setState({
        showInstallMessage: true
      })
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
            {this.state.showInstallMessage ? <CustomizedSnackbars /> : null}
            <LabelBottomNavigation value={'search'} />
          </div>
        )}
      </ResultContext.Consumer>
    )
  }
}

export default App
