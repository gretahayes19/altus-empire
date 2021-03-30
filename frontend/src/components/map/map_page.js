import React from 'react';
import GoogleApiWrapper from './map';
import SearchBar from '../search/searchbar';
import SimpleMap from './map2';
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
        console.log("hi");
        this.props.fetchDispensaries().then(() => this.setState({dispensaries: this.props.dispensaries}));
    }

    render () {
        if (!this.props.dispensaries) return null;
        const { dispensaries } = this.props

        let dispensaryIndex = '';
        if (dispensaries.length > 0) {
            dispensaryIndex = <SimpleMap dispensaries={dispensaries} />
        } 
        
        // const dispensaries = [{ lat: 40.7544, lng: -73.9739 }, { lat: 40.6784, lng: -73.9857 }, {
        //     lat: 40.7484,
        //     lng: -73.9857
        // }]

        return (
            <>
            <div className="map-page">  
                <SearchBar className="search-bar"/>
                {/* <GoogleApiWrapper dispensaries={dispensaries}/> */}
                  {dispensaryIndex}
                <DispensaryListContainer />
            </div>
               
            </>
        )


    }
}

export default MapPage;