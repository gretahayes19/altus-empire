import React from "react";
import GoogleApiWrapper from "../map/map";
import SearchBar from "../search/searchbar";
import "./home.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <SearchBar className="search-bar" />
        <GoogleApiWrapper />
      </div>
    );
  }
}

export default HomePage;
