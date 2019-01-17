import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LocationOnIcon from '@material-ui/icons/LocationOnOutlined';
import config from '../../config';

class AlertDialog extends React.Component {
  state = {
    open: false,
    lat: null,
    lng: null,
    errorMessage: '',
    servicesOn: false,
    locationInput: '',
  };

  componentDidMount() {
    if (this.state.servicesOn) this.locationServices()
  }

  locationServices = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.geocode(`${position.coords.latitude},${position.coords.longitude}`),
      err => this.setState({ servicesOn: false, errorMessage: err })
    )
  };

  geocode = (location) => {
    const queryURL = `${config.url}api/geocode/${location}`;
    axios.get(queryURL)
      .then((data) => {
        let centerCoord = data.data.results[0].geometry.location;
        let formattedAddress = data.data.results[0].formatted_address;
        let addressComponents = data.data.results[0].address_components;
        let locationOptions = addressComponents.map(e => e.short_name);
        let locationIndex = locationOptions.length - 2;
        console.log(locationOptions);
        this.setState({ locationInput: locationOptions[locationIndex], servicesOn: true })
        // callAddressCityIndex(locationOptions[locationIndex], formattedAddress, centerCoord);
      })
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleAccept = () => {
    this.setState({ open: false, servicesOn: true });
    this.locationServices();
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <LocationOnIcon >
          <button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          </button>
        </LocationOnIcon>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleAccept} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;