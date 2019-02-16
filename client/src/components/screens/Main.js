import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import MenuView from "./MenuView";
import DetailedExpansionPanel from "../material/DetailedExpansionPanel";
import { Typography, Divider } from "@material-ui/core";
import CustomizedInputBase from "../material/SearchBar";
import { ResultContext } from "../utils/ContextApi";
import CardActions from "@material-ui/core/CardActions";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: "100%",
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 72,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
    boxShadow: "none"
  },
  rootPaper: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid rgb(6, 67, 94)",
    borderRadius: 6 + "px",
    boxShadow: "none",
    width: "100%",
    marginTop: 30,
    marginBottom: 30
  },
  padding: {
    padding: 15
  },
  searchPage: {
    width: "100%"
  },
  mobileStepper: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  title: {
    marginTop: 30
  }
});

class Main extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme, context } = this.props;
    const { activeStep } = this.state;
    const maxSteps = 2;

    const placesList = (
      <table className={classes.table}>
        {context.state.placesList.map((e, i) => (
          <tbody key={i}>
            <tr
              onClick={() => {
                context.geocode(e);
              }}
            >
              <td>{e}</td>
            </tr>
          </tbody>
        ))}
      </table>
    );

    return (
      <ResultContext.Consumer>
        {context => (
          <div className={classes.root}>
            <div className={classes.header}>
              <MenuView context={context} />
            </div>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
              className={classes.searchPage}
            >
              <div className={classes.searchPage}>
                <div className={classes.rootPaper}>
                  <Paper className={classes.padding}>
                    {/* <Typography variant="title" className={classes.title}>
                      Greetings.
                    </Typography> */}
                    <Typography variant="title" className={classes.title}>
                      What's your Zip Code?
                    </Typography>
                    <Paper className={classes.paper}>
                      <CustomizedInputBase context={context} />
                    </Paper>
                  </Paper>
                  {context.state.placesOn ? placesList : null}
                  {/* <CardActions>
                      <Button color="primary" size="small">
                        Search Nearby
                      </Button>
                    </CardActions> */}
                </div>
              </div>
              <div className={classes.searchPage}>
                <DetailedExpansionPanel />
              </div>
            </SwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.mobileStepper}
              nextButton={
                <Button
                  size="small"
                  onClick={this.handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {"Next"}
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={this.handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </div>
        )}
      </ResultContext.Consumer>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
