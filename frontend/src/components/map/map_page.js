import React from 'react'
import GoogleApiWrapper from './map'
import SearchBar from '../search/searchbar'
import "./map.css"

class MapPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchDispensaries();
    }

    render () {
        if (!this.props.dispensaries) return null;
        
        const {dispensaries} = this.props
        // const dispensaries = [{ lat: 40.7544, lng: -73.9739 }, { lat: 40.6784, lng: -73.9857 }, {
        //     lat: 40.7484,
        //     lng: -73.9857
        // }]

        return (
            <div className="map-page">  
                <SearchBar className="search-bar"/>
                <GoogleApiWrapper dispensaries={dispensaries}/>
            </div>
        )


    }
}

export default MapPage;