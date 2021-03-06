import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import LocationOnIcon from "@material-ui/icons/LocationOnOutlined";

class AlertDialog extends React.Component {
  state = {
    isLoading: false,
    open: false,
    errorMessage: "",
    servicesOn: null,
    haveOpened: false,
    currentLocation: "",
    centerCoord: ""
  };

  signal = axios.CancelToken.source();
  _isMounted = false;

  componentDidMount = () => {
    this._isMounted = true;
    let servicesOn = localStorage.getItem("servicesOn");
    if (servicesOn) {
      this.setState({ servicesOn: true });
      this.locationServices();
    }
  };

  locationServices = () => {
    window.navigator.geolocation.getCurrentPosition(position => {
      if (position.coords) {
        this.geocode(
          `${position.coords.latitude},${position.coords.longitude}`
        );
      }
    });
  };

  geocode = async location => {
    try {
      if (this._isMounted) {
        this.setState({ isLoading: true });
      }
      localStorage.setItem("servicesOn", true);
      const queryURL = "/api/geocode/" + location;
      let response = await axios.get(queryURL, {
        cancelToken: this.signal.token
      });
      let addressComponents = response.data.results[0].address_components;
      let locationOptions = addressComponents.map(e => e.short_name);
      let currentLocation = `${locationOptions[0]} ${locationOptions[1]} ${
        locationOptions[locationOptions.length - 6]
      }, ${locationOptions[locationOptions.length - 4]} ${
        locationOptions[locationOptions.length - 2]
      }`;
      if (this._isMounted) {
        this.setState({ currentLocation, isLoading: true });
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

  handleClickOpen = () => {
    if (!this.state.haveOpened && !this.state.servicesOn) {
      this.setState({ open: true, haveOpened: true });
      this.locationServices();
    } else {
      this.props.context.geocode(
        this.state.currentLocation,
        this.state.centerCoord
      );
    }
  };

  handleAccept = () => {
    this.setState({ open: false });
    this.props.context.geocode(
      this.state.currentLocation,
      this.state.centerCoord
    );
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillUnmount() {
    this._isMounted = false;
    this.signal.cancel();
  }

  render() {
    return (
      <div>
        <Button
          variant="text"
          onClick={this.handleClickOpen}
          aria-label="Current Location"
        >
          <LocationOnIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Help apps determine location automatically.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose}
              color="primary"
              aria-label="disagree"
            >
              Disagree
            </Button>
            <Button
              onClick={this.handleAccept}
              color="primary"
              autoFocus
              aria-label="agree"
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
