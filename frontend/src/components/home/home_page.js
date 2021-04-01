import React from "react";
import MapPageContainer from '../map/map_page_container'
import "../../styles/home.css";
import NavBarContainer from "../nav/navbar_container";

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