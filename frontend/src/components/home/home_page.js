import React from "react";
import MapPageContainer from '../map/map_page_container'
import "./home.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <MapPageContainer />
      </div>
    );
  }
}

export default HomePage;
