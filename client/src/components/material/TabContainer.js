import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Main from "../screens/Main";
import Insurance from "../SideBar/Insurance";
import { ResultContext } from "../utils/ContextApi";
import MenuView from "../screens/MenuView";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const drawerWidth = 240;
const windowHeight = window.screen.height;

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100%",
    marginTop: 70
  },
  appBar: {
    boxShadow:
      "0px 2px 0px -1px rgba(0,0,0,0.2), 0px 2px 0px 0px rgba(0,0,0,0.14), 0px 1px 0px 0px rgba(0,0,0,0.12)",
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  }
});

class TabBar extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <ResultContext.Consumer>
        {context => (
          <div className={classes.root}>
            <div className={classes.header}>
              <MenuView context={context} />
            </div>
            <AppBar
              position="static"
              color="inherit"
              className={classes.appBar}
            >
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Search" />
                <Tab label="Insurance" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
              className={classes.height}
            >
              <TabContainer dir={theme.direction}>
                <Main context={context} />
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <Insurance />
              </TabContainer>
            </SwipeableViews>
          </div>
        )}
      </ResultContext.Consumer>
    );
  }
}

TabBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TabBar);
