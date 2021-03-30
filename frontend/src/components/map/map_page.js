import React from 'react'
import GoogleApiWrapper from './map'
import SearchBar from '../search/searchbar'
import "./map.css"

class MapPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dispensaries: []
        }
    }

    componentDidMount() {
        console.log("hi");
        this.props.fetchDispensaries().then(() => this.setState({dispensaries: this.props.dispensaries}));
    }

    render () {
        if (!this.props.dispensaries) return null;
        const { dispensaries } = this.props


        return (
            <>
            <div className="map-page">  
                <SearchBar className="search-bar"/>
                <GoogleApiWrapper dispensaries={dispensaries}/>
            </div>
               
            </>
        )


    }
}

export default MapPage;