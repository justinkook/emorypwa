import React, { Component } from 'react'
import axios from 'axios'

export const ResultContext = React.createContext()

let coordsList = []
let previousLocationInput = localStorage.getItem('locationInput')

export class MyProvider extends Component {
  state = {
    isLoading: false,
    onFocus: false,
    confirmGetAll: false,
    locationInput: `${previousLocationInput}`,
    searchTerm: '',
    centerCoord: { lat: 33.78948, lng: -84.32095 },
    resultList: [],
    placesOn: false,
    placesList: [previousLocationInput]
  }

  signal = axios.CancelToken.source()

  handleGetAll = async e => {
    try {
      e.preventDefault()
      this.setState({ searchTerm: 'Nearby' })
      this.setState({ isLoading: true })
      const allLocations = await axios.get('/api/location', {
        cancelToken: this.signal.token
      })

      for (let i = 0; i < allLocations.data.length; i++) {
        this.calcDistance(
          this.state.centerCoord,
          allLocations.data[i].coordinates
        )
        Array.prototype.push.apply(allLocations.data[i], [coordsList[i]])
      }
      allLocations.data.sort(function (a, b) {
        return a[0] - b[0]
      })

      this.setState({
        resultList: allLocations.data,
        isLoading: false,
        confirmGetAll: true,
        placesOn: false
      })
      localStorage.setItem('locationInput', this.state.locationInput)
    } catch (err) {
      if (axios.isCancel(err)) {
      } else {
        this.setState({ isLoading: false })
      }
    }
  }

  confirmGetAll = () => {
    this.setState({ confirmGetAll: false })
  }

  /**
   * gets two coordinate inputs from api/search then calculates distance in miles
   * @param {Object} coord1 - location input coordinates {lat: 30, lng: -84}
   * @param {Object} coord2 - business data coordinates {latitude: 30, longitude: -84}
   */
  calcDistance = (coord1, coord2) => {
    Number.prototype.toRad = function () {
      return (this * Math.PI) / 180
    }
    let lat2 = coord2.latitude
    let lon2 = coord2.longitude
    let lat1 = coord1.lat
    let lon1 = coord1.lng

    let R = 6371 // km
    let x1 = lat2 - lat1
    let dLat = x1.toRad()
    let x2 = lon2 - lon1
    let dLon = x2.toRad()

    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1.toRad()) *
        Math.cos(lat2.toRad()) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c
    let miles = d * 0.62137
    coordsList.push(Math.round(miles * 10) / 10)
  }

  getCenter = async () => {
    try {
      let location = this.state.locationInput
      const queryURL = 'api/geocode/' + location
      let response = await axios.get(queryURL, {
        cancelToken: this.signal.token
      })
      let centerCoord = response.data.results[0].geometry.location
      let formattedAddress = response.data.results[0].formatted_address
      this.setState({
        centerCoord: {
          lat: centerCoord.lat,
          lng: centerCoord.lng
        },
        placesList: [formattedAddress, ...this.state.placesList]
      })
      if (!this.state.searchTerm === '') this.renderMap(centerCoord)
    } catch (err) {
      if (axios.isCancel(err)) {
      } else {
        this.setState({ isLoading: false })
      }
    }
  }

  renderMap = async centerCoord => {
    try {
      this.setState({ isLoading: true })
      let businessData = await axios.post(
        `/api/search/${this.state.searchTerm}/${this.state.locationInput}`,
        {
          cancelToken: this.signal.token
        }
      )
      for (let i = 0; i < businessData.data.length; i++) {
        this.calcDistance(centerCoord, businessData.data[i].coordinates)
        Array.prototype.push.apply(businessData.data[i], [coordsList[i]])
      }
      businessData.data.sort(function (a, b) {
        return a[0] - b[0]
      })
      this.setState({ resultList: businessData.data, isLoading: false })
      localStorage.setItem('locationInput', this.state.locationInput)
    } catch (err) {
      if (axios.isCancel(err)) {
      } else {
        this.setState({ isLoading: false })
      }
    }
  }

  componentDidMount = () => {
    if (previousLocationInput === null) {
      this.setState({ locationInput: 'Atlanta, GA' })
    }
    if (previousLocationInput === null) {
      this.setState({ resultList: [] })
    }
  }

  componentWillUnmount = () => {
    this.signal.cancel()
  }

  render () {
    return (
      <ResultContext.Provider
        value={{
          state: this.state,
          geocode: locationInput =>
            this.setState({
              locationInput
            }),
          handleSearchUpdate: async searchTerm => {
            this.setState({
              searchTerm,
              isLoading: true
            })
            await this.getCenter()
          },
          handleGetAll: e => this.handleGetAll(e),
          confirmGetAll: () => this.confirmGetAll(),
          handleLocationUpdate: e => {
            this.setState({
              locationInput: e.target.value,
              placesOn: true
            })
            this.getCenter()
          },
          handleLocationClear: () =>
            this.setState({
              locationInput: '',
              placesOn: false,
              placesList: []
            }),
          handleOnFocus: () => this.setState({ onFocus: true }),
          handleOffFocus: () => this.setState({ onFocus: false }),
          handlePlacesOff: () =>
            this.setState({ placesOn: false, placesList: [] })
        }}
      >
        {this.props.children}
      </ResultContext.Provider>
    )
  }
}
