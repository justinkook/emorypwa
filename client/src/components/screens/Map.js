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
        bottom: 50,
        right: 0,
        padding: '2px',
        zIndex: 999,
        margin: 10,
    },
    bottomNavStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: '2px',
        zIndex: 999,
        margin: 5
    },
    avatar: {
        width: 60,
        height: 60,
        color: '#fff',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        backgroundColor: 'rgb(0, 122, 255)',
    },
    avatarIcon: {
        height: 35,
        width: 35,
    },
    locationIcon: {
        height: 45,
        width: 45,
        color: 'rgb(0, 122, 255)',
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
                zoom: 11,
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
                offsetLeft={-70}
            >
                {e.name}
                <CityPin size={40} onClick={() => this.setState({ popupInfo: e })} />
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
                offsetTop={-40}
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

    componentDidUpdate = (prevProps) => {
        if (prevProps.context.state.resultList[0] !== this.props.context.state.resultList[0]) {
            this.setState({
                viewport: {
                    width: '100vw',
                    height: '100vh',
                    longitude: this.props.context.state.resultList[0].coordinates.longitude,
                    latitude: this.props.context.state.resultList[0].coordinates.latitude,
                    zoom: 11,
                }
            })
        }
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
                            mapStyle={'mapbox://styles/mapbox/light-v9?optimize=true'}
                            {...this.state.viewport}
                            onViewportChange={this._onViewportChange}
                        >
                            <Marker
                                latitude={context.state.centerCoord.lat}
                                longitude={context.state.centerCoord.lng}
                                dynamicPosition={false}
                                closeButton={false}
                                closeOnClick={false}
                                sortByDepth={true}
                            >
                                <LocationOnIcon style={styles.locationIcon} />
                            </Marker>
                            {context.state.resultList.map(this._renderCityMarker)}
                            {this._renderPopup()}
                            <div className="nav" style={context.state.searchTerm !== 'Clinics' ? styles.bottomNavStyle : styles.navStyle}>
                                <Avatar style={styles.avatar} >
                                    <LocationOnIcon
                                        style={styles.avatarIcon}
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
