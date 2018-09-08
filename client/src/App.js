import React, { Component } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import keys from './config/keys';
import TestMarker from "./TestMarker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class App extends Component {
  static defaultProps = {
    center: {
      lat: 39.742043,
      lng: -104.991531
    },
    zoom: 9
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.GOOGLE_MAPS_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <TestMarker
            lat={39.742043}
            lng={-104.991531}
            text={'Denver'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;
