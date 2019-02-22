import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import DetailedExpansionPanel from "../material/DetailedExpansionPanel";
import { Typography } from "@material-ui/core";
import CustomizedInputBase from "../material/SearchBar";
import { ResultContext } from "../utils/ContextApi";

const drawerWidth = 240;
const windowHeight = window.screen.height;

const styles = theme => ({
  root: {
    width: "100%",
    flexGrow: 1,
    height: `calc(${windowHeight}px - 9em)`
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
    borderRadius: 6,
    boxShadow: "none",
    width: "100%",
    marginTop: 30,
    marginBottom: 30,
    maxWidth: 600
  },
  padding: {
    padding: 20,
    backgroundColor: "#24356f",
    marginTop: ".8em"
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
    marginTop: "20%",
    color: "white"
  },
  table: {
    width: "100%",
    marginBottom: 50
  },
  subtitle: {
    marginTop: 10,
    color: "white"
  },
  button: {
    color: "white",
    border: "1px solid white",
    marginBottom: "15%",
    marginTop: 10,
    borderRadius: 56,
    padding: "4px 18px"
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
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
              className={classes.searchPage}
            >
              <div>
                <div className={classes.rootPaper}>
                  <div className={classes.padding}>
                    <Typography variant="h4" className={classes.title}>
                      Where's your Location?
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      className={classes.subtitle}
                    >
                      Find nearby care
                    </Typography>
                    <Paper className={classes.paper}>
                      <CustomizedInputBase context={context} />
                    </Paper>
                    <Button
                      size="small"
                      className={classes.button}
                      onClick={e => context.handleGetAll(e)}
                    >
                      Search Nearby
                    </Button>
                  </div>
                  {context.state.placesOn ? placesList : null}
                </div>
              </div>
              <div>
                <DetailedExpansionPanel />
              </div>
            </SwipeableViews>
            <div className={classes.mobileStepper}>
              <MobileStepper
                steps={maxSteps}
                position="bottom"
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
