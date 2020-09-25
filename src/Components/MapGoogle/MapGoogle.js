import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapGoogle = () => {
    return (
        <div>
            <h1>Map coming soon...</h1>
            {/* <Map google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick} name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map> */}
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAoRBjrFQxma7jHTGeg8PlzU9KIXvbIsVI")
})(MapGoogle)

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class MapGoogle extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '550px', width: '80%', margin:"auto", marginTop:"40px" }}>
//         <GoogleMapReact
          
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={257.20}
//             lng={77.50}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default MapGoogle;
