import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import BeenHereIcon from "@material-ui/icons/BeenhereOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import { Link } from "react-router-dom";
import { ResultContext } from "../utils/ContextApi";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/MenuOutlined";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 9,
    marginTop: 5,
    boxShadow: "none"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "52%",
    padding: "0 8px"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 72,
    boxShadow: "none",
    background: "white",
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  media: {
    maxWidth: 90,
    objectFit: "contain",
    [theme.breakpoints.up("sm")]: {
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
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid rgb(6, 67, 94)",
    borderRadius: 6 + "px",
    width: "100%"
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none"
  },
  summary: {
    padding: "0 12px 0 12px",
    margin: 0,
    height: "100%"
  },
  searchIcon: {
    position: "absolute",
    paddingLeft: 32,
    right: 5,
    height: 32,
    width: 32,
    top: "0.5em",
    color: "rgb(6, 67, 94)",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  searchText: {
    position: "absolute",
    right: 80,
    top: "1.85em",
    color: "rgb(6, 67, 94)"
  },

  height: {
    height: 72,
    boxShadow: "none"
  },
  terms: {
    position: "fixed",
    bottom: 0,
    maxWidth: 240,
    textAlign: "left"
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbarIcon} />
        <Divider />
        <List>
          <Link to={`/`} className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary={"Search"} />
            </ListItem>
          </Link>
          <Link to={`/insurance`} className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <BeenHereIcon />
              </ListItemIcon>
              <ListItemText primary={"Insurance"} />
            </ListItem>
          </Link>
          <Divider />
          <Link to={`/`} className={classes.link}>
            <ListItem button className={classes.terms}>
              <ListItemText secondary={"Privacy | Terms of Use"} />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <ResultContext.Consumer>
        {context => (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
              <ExpansionPanel className={classes.height}>
                <ExpansionPanelSummary
                  onClick={() => context.handlePlacesOff()}
                  className={classes.summary}
                >
                  <Toolbar className={classes.root}>
                    <CardMedia
                      component="img"
                      alt="Emory Rehab"
                      className={classes.media}
                      height="40"
                      image="/assets/logo-emory-footer.png"
                      title="Emory Rehab"
                    />
                  </Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.searchIcon}
                  >
                    <MenuIcon />
                  </IconButton>
                </ExpansionPanelSummary>
              </ExpansionPanel>
            </AppBar>
            <nav className={classes.drawer}>
              <Hidden smUp implementation="css">
                <Drawer
                  container={this.props.container}
                  variant="temporary"
                  anchor={theme.direction === "rtl" ? "right" : "left"}
                  open={this.state.mobileOpen}
                  onClose={this.handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden xsDown implementation="css">
                <Drawer
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  variant="permanent"
                  open
                >
                  {drawer}
                </Drawer>
              </Hidden>
            </nav>
          </div>
        )}
      </ResultContext.Consumer>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
