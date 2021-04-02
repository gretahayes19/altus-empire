import React from 'react';
import GoogleApiWrapper from './map';
import SearchBar from '../search/searchbar';
import "../../styles/map.css";
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
        // if (!this.props.dispensaries.length) return null;
        const { dispensaries } = this.props

        return (
            <>
            <div className="home-page">
                <SearchBar fetchDispensaries={this.props.fetchDispensaries} fetchSearchByNameDispensary={this.props.fetchSearchByNameDispensary}/>
                <div className="map-list">
                    <div className="dispensary-list-container">
                        <DispensaryListContainer />
                    </div>
                    <div className="map-container">
                        <GoogleApiWrapper dispensaries={dispensaries}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default MapPage;