import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/home'}>Profile</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return null;
      }
  }

  render() {
      return (
        <div className="navbar-div">
            <div className="navbar-div-logo">
            </div>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;