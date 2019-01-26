import React, { Component } from 'react';
import axios from 'axios';

export const ResultContext = React.createContext();

export class MyProvider extends Component {
    state = {
        locationInput: '',
        searchTerm: '',
        ltachList: [
            {
                name: "Emory Decatur-LTACH",
                location: {
                    display_address: [
                        "450 N. Candler Street",
                        "Decatur, GA 30030"
                    ]
                },
                phone: "+14045016226",
            },
            {
                name: "Emory & Select",
                location: {
                    display_address: [
                        "705 Juniper Street NE",
                        "Atlanta, GA 30308"
                    ]
                },
                phone: "+14044664600",
            },
        ],
        rehabList: [
            {
                name: "Emory Rehabilitation Hospital",
                location: {
                    display_address: [
                        "1441 Clifton Road",
                        "Atlanta, GA 30322"
                    ]
                },
                phone: "+14047127593",
            },
            {
                name: "Emory DeKalb Rehabilitation at Decatur",
                location: {
                    display_address: [
                        "2701 North Decatur Road",
                        "Decatur, GA 30033"
                    ]
                },
                phone: "+14045013646",
            },
        ],
        nursingList: [
            {
                name: "Emory Decatur-LTACH",
                location: {
                    display_address: [
                        "450 N. Candler Street",
                        "Decatur, GA 30030"
                    ]
                },
                phone: "+14045016226",
            },
            {
                name: "Emory & Select",
                location: {
                    display_address: [
                        "705 Juniper Street NE",
                        "Atlanta, GA 30308"
                    ]
                },
                phone: "+14044664600",
            },
        ],
        resultList: [],
    }

    componentDidMount = () => {
        axios.get('/api/location')
            .then((res) => {
                this.setState({ resultList: res.data });
                localStorage.setItem('resultsList', res.data);
            })
    }

    render() {
        return (
            <ResultContext.Provider value={{
                state: this.state,
                geocode: (locationInput) => this.setState({
                    locationInput
                }),
                handleSearchUpdate: (searchTerm) => this.setState({
                    searchTerm
                }),
                handleLocationUpdate: (e) => this.setState({
                    locationInput: e.target.value
                }),
            }} >
                {this.props.children}
            </ResultContext.Provider>
        )
    }
}
