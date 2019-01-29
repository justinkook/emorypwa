import React, { Component } from 'react';
import axios from 'axios';

export const ResultContext = React.createContext();

let coordsList = [];

export class MyProvider extends Component {
    state = {
        isLoading: false,
        locationInput: '',
        searchTerm: '',
        centerCoord: { lat: 33.7946333, lng: -84.44877199999999 },
        nursingList: [
            {
                name: "AG Rhodes",
                location: {
                    display_address: [
                        "Jornette Malone"
                    ]
                },
                phone: "+14043150900",
            },
            {
                name: "Budd Terrace",
                location: {
                    display_address: [
                        "Sahebi Saiyed, MD - sahebi.a.saiyed@emory.edu",
                    ]
                },
                phone: "+14047286515",
            },
        ],
        resultList: [],
    }

    signal = axios.CancelToken.source();

    /**
    * gets two coordinate inputs from api/search then calculates distance in miles
    * @param {Object} coord1 - location input coordinates {lat: 30, lng: -84}
    * @param {Object} coord2 - business data coordinates {latitude: 30, longitude: -84}
    */
    calcDistance = (coord1, coord2) => {
        Number.prototype.toRad = function () {
            return this * Math.PI / 180;
        }
        let lat2 = coord2.latitude;
        let lon2 = coord2.longitude
        let lat1 = coord1.lat;
        let lon1 = coord1.lng;

        let R = 6371; // km 
        let x1 = lat2 - lat1;
        let dLat = x1.toRad();
        let x2 = lon2 - lon1;
        let dLon = x2.toRad();

        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
        let miles = d * 0.62137;
        coordsList.push(Math.round(miles * 10) / 10);
    }

    getCenter = async () => {
        try {
            this.setState({ isLoading: true });
            let location = this.state.locationInput;
            const queryURL = 'api/geocode/' + location;
            let response = await axios.get(queryURL)
            let centerCoord = response.data.results[0].geometry.location;
            this.setState({
                centerCoord: {
                    lat: centerCoord.lat, lng: centerCoord.lng
                },
                isLoading: true
            })
            this.renderMap(centerCoord);
        } catch (err) {
            if (axios.isCancel(err)) {
            } else {
                this.setState({ isLoading: false });
            }
        }
    }

    renderMap = async (centerCoord) => {
        try {
            this.setState({ isLoading: true });
            let businessData = await axios.post(`/api/search/${this.state.searchTerm}/${this.state.locationInput}`, {
                cancelToken: this.signal.token,
            })
            for (let i = 0; i < businessData.data.length; i++) {
                this.calcDistance(centerCoord, businessData.data[i].coordinates)
                Array.prototype.push.apply(businessData.data[i], [coordsList[i]]);
            }
            businessData.data.sort(function (a, b) {
                return a[0] - b[0];
            });
            this.setState({ resultList: businessData.data, isLoading: true });
        } catch (err) {
            if (axios.isCancel(err)) {
            } else {
                this.setState({ isLoading: false });
            }
        }
    }

    componentWillUnmount() {
        this.signal.cancel();
    }

    render() {
        return (
            <ResultContext.Provider value={{
                state: this.state,
                geocode: (locationInput) => this.setState({
                    locationInput
                }),
                handleSearchUpdate: async (searchTerm) => {
                    this.setState({
                        searchTerm
                    });
                    await this.getCenter();
                },
                handleLocationUpdate: (e) => this.setState({
                    locationInput: e.target.value
                }),
                getCenter: () => this.getCenter()
            }} >
                {this.props.children}
            </ResultContext.Provider>
        )
    }
}
