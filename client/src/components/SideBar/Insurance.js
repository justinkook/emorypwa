import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./insurance.css";
import InsuranceSearch from "./InsuranceSearchBar";
import Paper from "@material-ui/core/Paper";
import { Typography, Divider } from "@material-ui/core";

const drawerWidth = 240;

const styles = theme => ({
  table: {
    maxHeight: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  root: {
    display: "flex",
    padding: 15,
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  title: {
    color: "rgb(6, 67, 94)",
    fontSize: 28,
    marginTop: 20,
    marginBottom: 30
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
    maxWidth: 600
  },
  margin: {
    marginTop: 10,
    marginBottom: 20
  }
});

class Insurance extends Component {
  state = {
    isLoading: false,
    insuranceList: [],
    completeList: [],
    inputFilter: ""
  };

  signal = axios.CancelToken.source();
  _isMounted = false;

  componentDidMount = () => {
    this._isMounted = true;
    this.getInsuranceList();
  };

  handleInputChange = async event => {
    event.preventDefault();
    await this.setState({ inputFilter: event.target.value });
    const filteredList = this.state.completeList.filter(e =>
      e.name.toLowerCase().includes(this.state.inputFilter.toLowerCase())
    );
    await this.setState({ insuranceList: filteredList });
  };

  handleLocationClear = async () => {
    await this.setState({ inputFilter: "" });
    const filteredList = this.state.completeList.filter(e =>
      e.name.toLowerCase().includes(this.state.inputFilter.toLowerCase())
    );
    await this.setState({ insuranceList: filteredList });
  };

  submitFilterList = async event => {
    event.preventDefault();
    const filteredList = this.state.completeList.filter(e =>
      e.name.toLowerCase().includes(this.state.inputFilter.toLowerCase())
    );
    this.setState({ insuranceList: filteredList });
  };

  getInsuranceList = async () => {
    try {
      if (this._isMounted) {
        this.setState({ isLoading: true });
        let response = await axios.get("/api/insurance", {
          cancelToken: this.signal.token
        });
        this.setState({ completeList: response.data, isLoading: false });
        this.setState({ insuranceList: response.data });
      }
    } catch (err) {
      if (axios.isCancel(err)) {
      } else {
        if (this._isMounted) {
          this.setState({ isLoading: false });
        }
      }
    }
  };

  componentWillUnmount = () => {
    this._isMounted = false;
    this.signal.cancel();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <main>
          <div className={classes.root}>
            <form
              className="inputWithIcon"
              onSubmit={event => this.submitFilterList(event)}
            >
              <div className={classes.margin}>
                <Typography variant="title" className={classes.title}>
                  Insurance
                </Typography>
                <Paper className={classes.paper}>
                  <InsuranceSearch
                    value={this.state.inputFilter}
                    onChange={this.handleInputChange}
                    handleLocationClear={this.handleLocationClear}
                  />
                </Paper>
                <input type="submit" className="hidden" />
              </div>
            </form>
          </div>
          <Divider />
          <table id="listArea" className={classes.table}>
            {this.state.insuranceList.map((e, i) => (
              <tbody key={i}>
                <tr>
                  <td>{e.name}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </main>
      </div>
    );
  }
}

Insurance.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Insurance);
