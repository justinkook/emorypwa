import React from 'react';

const style = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: 0,
    zIndex: -1000,
};

class Map extends React.Component {

    render() {
        return (
            <div style={style} ref="map"></div>
        );
    }
}

export default Map;