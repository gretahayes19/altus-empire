import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import "./map.css"
import { golden } from './mapstyle'
import cannabisMarker from '../../assets/cannabis-solid.svg'

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 40.7484,
            lng: -73.9857
        },
        zoom: 11
    };

    render() {
        if (!this.props.dispensaries) return null;

        const { dispensaries } = this.props

        const dispMarks = dispensaries.map((mark, index) =>
            <div
                key={index}
                lat={mark.latitude} 
                lng={mark.longitude }
                onClick={this.onMarkerClick}>
                {cannabisMarker}
            </div>)
            
        return (
            // Important! Always set the container height explicitly
            <div className="map-div" >
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