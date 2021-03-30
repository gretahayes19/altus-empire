import React from 'react';
import GoogleApiWrapper from './map';
import SearchBar from '../search/searchbar';
import "./map.css";
import DispensaryListContainer from "../dispensary_list/dispensary_list_container"

class MapPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dispensaries: []
        }
    }

    componentDidMount() {
        this.props.fetchDispensaries().then(() => this.setState({dispensaries: this.props.dispensaries}));
    }

    render () {
        if (!this.props.dispensaries.length) return null;
        const { dispensaries } = this.props


        return (
            <>
            <div className="map-page">  
                <SearchBar className="search-bar"/>
                <GoogleApiWrapper dispensaries={dispensaries}/>
                <DispensaryListContainer />
            </div>
            </>
        )
    }
}

export default MapPage;