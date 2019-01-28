import React, { Component } from 'react';
import { ResultContext } from '../utils/ContextApi';
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import CityPin from './CityPin';
import LocationOnIcon from '@material-ui/icons/LocationOnOutlined';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    map: {
        position: 'fixed',
        zIndex: 1,
    },
    navStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: '4px',
        zIndex: 999,
    },
    avatar: {
        margin: 5,
        width: 60,
        height: 60,
        color: '#fff',
        backgroundColor: 'rgb(0, 122, 255)',
    },
}

class Map extends Component {
    state = {
        viewport: {
            width: '100vw',
            height: '100vh',
            zoom: 10,
            longitude: -84.44877199999999,
            latitude: 33.7946333
        },
        popupInfo: null
    };

    _onViewportChange = viewport => {
        this.setState({ viewport });
    };

    _updateViewportHome = () => {
        this.setState({
            viewport: {
                width: '100vw',
                height: '100vh',
                longitude: this.props.context.state.centerCoord.lng,
                latitude: this.props.context.state.centerCoord.lat,
                zoom: 12,
            }
        })
    };

    _renderCityMarker = (e, i) => {
        return (
            <Marker
                key={i}
                latitude={e.coordinates.latitude}
                longitude={e.coordinates.longitude}
                dynamicPosition={false}
                closeButton={false}
                closeOnClick={false}
                sortByDepth={true}
            >
                <CityPin size={25} onClick={() => this.setState({ popupInfo: e })} />
            </Marker>
        );
    }

    _renderPopup() {
        const { popupInfo } = this.state;

        return popupInfo && (
            < Popup
                latitude={popupInfo.coordinates.latitude}
                longitude={popupInfo.coordinates.longitude}
                dynamicPosition={false}
                closeButton={false}
                closeOnClick={true}
                sortByDepth={true}
                onClose={() => this.setState({ popupInfo: null })}
            >
                {popupInfo.name}
            </Popup >
        );
    }

    componentDidMount = () => {
        this.setState({
            viewport: {
                width: '100vw',
                height: '100vh',
                longitude: this.props.context.state.centerCoord.lng,
                latitude: this.props.context.state.centerCoord.lat,
                zoom: 10,
            }
        })
    }

    render() {
        return (
            <ResultContext.Consumer>
                {context => (
                    <div style={styles.map} >
                        <ReactMapGL
                            width="100%"
                            height="100%"
                            mapboxApiAccessToken={'pk.eyJ1IjoianVzdGlua29vayIsImEiOiJjanJmcGUyZDQxNjhoNDRsNW13OTU1cXRrIn0.IO6wM4mko07wPKDbyD5jOA'}
                            transitionDuration={500}
                            transitionInterpolator={new FlyToInterpolator()}
                            reuseMaps={true}
                            {...this.state.viewport}
                            onViewportChange={this._onViewportChange}
                        >
                            {context.state.resultList.map(this._renderCityMarker)}
                            {this._renderPopup()}
                            <div className="nav" style={styles.navStyle}>
                                <Avatar style={styles.avatar} >
                                    <LocationOnIcon
                                        onClick={this._updateViewportHome} />
                                </Avatar>
                            </div>
                        </ReactMapGL>
                    </div>
                )}
            </ResultContext.Consumer>
        );
    }
}

export default Map;
