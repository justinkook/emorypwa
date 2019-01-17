import React, { Component } from 'react';
import ComplexGrid from '../material/ComplexGrid';
import CustomizedInputBase from '../material/SearchBar';

class MapView extends Component {
    styles = {
        resultsContainer: {
            paddingBottom: .8 + 'em',
            paddingTop: .8 + 'em'
        }
    }

    render() {
        return (
            <div className="App">
                <CustomizedInputBase />
                <div style={this.styles.resultsContainer}>
                    <ComplexGrid />
                </div>
            </div>
        );
    }
}

export default MapView;
