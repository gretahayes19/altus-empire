import React from "react";
// import GoogleApiWrapper from "../map/map";
import MapPage from "../map/map_page";
// import SearchBar from "../search/searchbar";
import "../../styles/home.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <MapPage />
      </div>
    );
  }
}

export default HomePage;
