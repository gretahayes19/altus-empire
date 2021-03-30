import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import "./map.css"
import { golden } from './mapstyle'
import cannabisMarker from '../../assets/cannabis-solid.svg'

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {

        if (!this.props.dispensaries) return null;

        const { dispensaries } = this.props
        debugger
        const dispMarks = dispensaries.data.map((mark, index) =>
            <div
                key={index}
                lat={mark.latitude} 
                lng={mark.longitude }
                onClick={this.onMarkerClick}>
                {cannabisMarker}
            </div>)
            
        return (
            // Important! Always set the container height explicitly
            <div className="map-div" style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDIEumsEBQJ1SBu1boGzGQUtYvi7Q2YSE4'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    styles={golden}

                >
                    {/* <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    /> */}
                    {dispMarks}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;