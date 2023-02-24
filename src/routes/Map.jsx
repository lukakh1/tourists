import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 41.7151,
      lng: 44.8271
    },
    zoom: 9
  };
    return (
        <div id="sidebar" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
        </div>
    );
  }