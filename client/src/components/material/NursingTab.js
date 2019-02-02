import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import ComplexGrid from './ComplexGrid'
import { ResultContext } from '../utils/ContextApi'

function TabContainer ({ children, dir }) {
  return (
    <Typography component='div' dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  }
})

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render () {
    const { classes, theme } = this.props

    return (
      <ResultContext.Consumer>
        {context => (
          <div className={classes.root}>
            <AppBar
              position='static'
              style={{ boxShadow: 'none' }}
              color='inherit'
            >
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor='primary'
                textColor='inherit'
                variant='fullWidth'
              >
                <Tab label='Medical' />
                <Tab label='Admissions' />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
            >
              <TabContainer dir={theme.direction}>
                {context.state.nursingList.map((e, i) => (
                  <div key={i}>
                    <ComplexGrid
                      location1={e.location.display_address[0]}
                      location2={e.location.display_address[1]}
                      name={`${e.name}`}
                      phone={`${e.phone}`}
                      email={`${e.email}`}
                    />
                  </div>
                ))}
              </TabContainer>
              <TabContainer dir={theme.direction}>
                {context.state.nursingList.map((e, i) => (
                  <div key={i}>
                    <ComplexGrid
                      location1={e.location.display_address[0]}
                      location2={e.location.display_address[1]}
                      name={`${e.name}`}
                      phone={`${e.phone}`}
                      email={`${e.email}`}
                    />
                  </div>
                ))}
              </TabContainer>
            </SwipeableViews>
          </div>
        )}
      </ResultContext.Consumer>
    )
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(FullWidthTabs)
