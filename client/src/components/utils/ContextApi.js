import React, { Component } from 'react';
import axios from 'axios';

export const ResultContext = React.createContext();

export class MyProvider extends Component {
    state = {
        locationInput: '',
        searchTerm: '',
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
