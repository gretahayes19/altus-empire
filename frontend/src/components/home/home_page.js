import React from "react";
import GoogleApiWrapper from "../map/map";
import SearchBar from "../search/searchbar";
import "../../styles/home.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <SearchBar className="home-search-bar" />
        <GoogleApiWrapper className="home-map"/>
      </div>
    );
  }
}

export default HomePage;
