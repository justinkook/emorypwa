import React, { Component } from 'react';

export const ResultContext = React.createContext();

export class MyProvider extends Component {
    state = {
        locationInput: '',
        searchTerm: '',
        ltachList: [
            {
                title: 'Emory Decatur | LTACH',
                phone: '+14045016226',
                email: 'justinkook@gmail.com',
            },
            {
                title: 'Emory & Select',
                phone: '+14044664600',
                email: 'justinkook@gmail.com',
            }
        ],
        rehabList: [
            {
                title: 'Emory Rehabilitation Hospital',
                phone: '+14047127593',
                email: 'justinkook@gmail.com',
            },
            {
                title: 'Emory Dekalb Rehabilitation',
                phone: '+14045013646',
                email: 'justinkook@gmail.com',
            }
        ],
        nursingList: [
            {
                title: 'Emory Rehabilitation Hospital',
                phone: '+14047127593',
                email: 'justinkook@gmail.com',
            },
            {
                title: 'Emory Dekalb Rehabilitation',
                phone: '+14045013646',
                email: 'justinkook@gmail.com',
            }
        ],
        resultList: [
            {
                title: 'Center for Rehabilitation Medicine',
                phone: '706-728-0283',
                email: 'justinkook@gmail.com',
            },
            {
                title: 'Dekalb',
                phone: '706-728-0283',
                email: 'justinkook@gmail.com',
            },
            {
                title: 'Dekalb',
                phone: '706-728-0283',
                email: 'justinkook@gmail.com',
            },
            {
                title: 'Dekalb',
                phone: '706-728-0283',
                email: 'justinkook@gmail.com',
            },
            {
                title: 'Dekalb',
                phone: '706-728-0283',
                email: 'justinkook@gmail.com',
            },
            {
                title: 'Dekalb',
                phone: '706-728-0283',
                email: 'justinkook@gmail.com',
            },
            {
                title: 'Dekalb',
                phone: '706-728-0283',
                email: 'justinkook@gmail.com',
            },
            {
                title: 'Dekalb',
                phone: '706-728-0283',
                email: 'justinkook@gmail.com',
            },
        ]
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
                getSearchResults: (resultList) => {
                    this.setState({ resultList });
                    localStorage.setItem('resultsList', resultList);
                }
            }} >
                {this.props.children}
            </ResultContext.Provider>
        )
    }
}
