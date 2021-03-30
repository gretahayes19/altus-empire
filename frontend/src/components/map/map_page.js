import React from 'react'
import GoogleApiWrapper from './map'
import SearchBar from '../search/searchbar'
import "./map.css"

class MapPage extends React.Component {
    constructor(props) {
        super(props)
    }


    render () {

        return (
            <div className="map-page">  
                <SearchBar className="search-bar"/>
                <GoogleApiWrapper />
            </div>
        )


    }
}

export default MapPage;