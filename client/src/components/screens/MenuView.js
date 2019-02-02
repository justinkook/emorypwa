import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'
import CustomizedInputBase from '../material/SearchBar'
import BeenHereIcon from '@material-ui/icons/BeenhereOutlined'
import InsertInvitation from '@material-ui/icons/InsertInvitationOutlined'
import CloudOffIcon from '@material-ui/icons/CloudOffOutlined'
import Paper from '@material-ui/core/Paper'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { Link } from 'react-router-dom'
import { ResultContext } from '../utils/ContextApi'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 9,
    marginLeft: 5,
    marginTop: 5
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    marginLeft: drawerWidth,
    boxShadow:
      '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    background: 'white'
  },
  media: {
    maxWidth: 90,
    objectFit: 'contain',
    [theme.breakpoints.up('sm')]: {
      height: 50
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  paper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 500,
    justifyContent: 'center',
    border: '2px solid rgb(6, 67, 94)',
    borderRadius: 6 + 'px',
    boxShadow: 'none',
    width: '100%'
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none'
  },
  summary: {
    padding: '0 12px 0 12px',
    margin: 0
  }
})

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  render () {
    const { classes, theme, context } = this.props

    const placesList = (
      <table className={classes.table}>
        {context.state.placesList.map((e, i) => (
          <tbody key={i}>
            <tr
              onClick={async event => {
                await context.geocode(e)
                await context.handleGetAll(event)
              }}
            >
              <td>{e}</td>
            </tr>
          </tbody>
        ))}
      </table>
    )

    const drawer = (
      <div>
        <div className={classes.toolbarIcon} />
        <Divider />
        <List>
          {['Search', 'Insurance', 'Appointments'].map((text, index) => (
            <Link to={`/${text}`} key={text} className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  {(() => {
                    switch (index) {
                      case 0:
                        return <SearchIcon />
                      case 1:
                        return <BeenHereIcon />
                      case 2:
                        return <InsertInvitation />
                      default:
                        return <CloudOffIcon />
                    }
                  })()}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </div>
    )

    return (
      <ResultContext.Consumer>
        {context => (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar position='fixed' className={classes.appBar}>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  onClick={() => context.handlePlacesOff()}
                  className={classes.summary}
                  expandIcon={<SearchIcon />}
                >
                  <Toolbar className={classes.root}>
                    <CardMedia
                      component='img'
                      alt='Emory Rehab'
                      className={classes.media}
                      height='40'
                      image='/assets/logo-emory-footer.png'
                      title='Emory Rehab'
                    />
                  </Toolbar>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Paper className={classes.paper}>
                    <CustomizedInputBase context={context} />
                  </Paper>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              {context.state.placesOn ? placesList : null}
            </AppBar>
            <nav className={classes.drawer}>
              <Hidden smUp implementation='css'>
                <Drawer
                  container={this.props.container}
                  variant='temporary'
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={this.state.mobileOpen}
                  onClose={this.handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden xsDown implementation='css'>
                <Drawer
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  variant='permanent'
                  open
                >
                  {drawer}
                </Drawer>
              </Hidden>
            </nav>
          </div>
        )}
      </ResultContext.Consumer>
    )
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer)
