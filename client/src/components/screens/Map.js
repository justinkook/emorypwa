import React from 'react';
import ReactDOM from 'react-dom';

const style = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: 0,
    zIndex: -1000,
};

class Map extends React.Component {

    componentDidMount() {
        this.loadMap();
        this.forceUpdate();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }

    loadMap() {
        if (this.props && this.props.google) {
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 14;
            let lat = 37.774929;
            let lng = -122.419416;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom,
                streetViewControl: false,
                scaleControl: false,
                mapTypeControl: false,
                panControl: false,
                zoomControl: false,
                rotateControl: true,
                fullscreenControl: false,
                gestureHandling: 'greedy'
            })
            this.map = new maps.Map(node, mapConfig);
        }
    }

    render() {
        return (
            <div style={style} ref="map"></div>
        );
    }
}

export default Map;