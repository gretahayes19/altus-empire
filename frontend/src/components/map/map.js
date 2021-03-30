
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import "./map.css"
import {golden} from './mapstyle'
import cannabisMarker from '../../assets/cannabis-solid.svg'





export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        if (!this.props.dispensaries) return null;

        
        
        const {dispensaries} = this.props
        const dispMarks = dispensaries.map((mark, index) => 
            <Marker 
                key={index} 
                icon={cannabisMarker}
                position={{ lat: mark.latitude, lng: mark.longitude }}
                onClick={this.onMarkerClick} 
                name={mark.dispensaryName}
            />)
        




        return (
         <div className="map-div">
            <Map
                google={this.props.google}
                zoom={11}
                styles={golden}
                mapTypeControl={false}
                streetViewControl={false}
                initialCenter={
                    {
                        lat: 40.7484,
                        lng: -73.9857
                    }
                }
            >
                {/* <Marker
                    onClick={this.onMarkerClick}
                    name={'Atlus Empire Headquarters'}
                /> */}
                {dispMarks}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDIEumsEBQJ1SBu1boGzGQUtYvi7Q2YSE4'
})(MapContainer);