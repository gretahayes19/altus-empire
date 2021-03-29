import React from 'react'
import GoogleApiWrapper from './map'
import SearchBar from '../search/searchbar'

class MapPage extends React.Component {
    constructor(props) {
        super(props)
    }


    render () {

        return (
            <>  
                <SearchBar />
                <GoogleApiWrapper />
            </>
        )


    }
}

export default MapPage;