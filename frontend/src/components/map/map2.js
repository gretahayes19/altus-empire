import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import "./map.css"
import { golden } from './mapstyle'
import Marker from './marker'


class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 40.7484,
            lng: -73.9857
        },
        zoom: 11
    };

    state = {
        show: false
    }

    onMarkerClick = (e) =>
        this.setState({
            show: !this.state.show
        });

    render() {

        if (!this.props.dispensaries) return null;

        const { dispensaries } = this.props
        debugger
        const dispMarks = dispensaries.map((mark, index) =>
            <Marker 
                key={index}
                lat={mark.latitude} 
                lng={mark.longitude }
                onClick={this.onMarkerClick}
                show={this.state.show}/>
            )
          
            
            
        return (
            // Important! Always set the container height explicitly
            <div className="map-div" >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDIEumsEBQJ1SBu1boGzGQUtYvi7Q2YSE4'}}
                    defaultOptions={{
                        styles: golden,
                    }}
                    // styles={golden}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}

                >
                    {dispMarks}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;