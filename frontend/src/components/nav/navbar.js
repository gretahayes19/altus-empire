import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import logo from "../../assets/Altus Empire_Wordmark.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.getMainNav = this.getMainNav.bind(this);
    this.getAuthNav = this.getAuthNav.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="nav-links">
                <Link to={'/home'}>Profile</Link>
                <a onClick={this.logoutUser}>Logout</a>
            </div>
        );
      } else {
        return (
          <div className="landing-nav-buttons">
            <a onClick={() => this.props.openModal("login")}>LOGIN</a>
            <a onClick={() => this.props.openModal("signup")}>GET STARTED</a>
          </div>
        );
      }
  }

  getAuthNav() {
    return (
      <div className="navbar auth-navbar-container">
        <div className="auth-navbar">
          <div className="left-nav">
            <Link to="/">
              <div className="navbar-div-logo">
                <img src={logo} />
              </div>
            </Link>
          </div>
          <div className="center-nav"></div>
          <div className="right-nav">{this.getLinks()}</div>
        </div>
      </div>
    );
  }

  getMainNav() {
    return (
      <div className="navbar landing-navbar-container">
        <div className="landing-navbar">
          <div className="left-nav">
            <a href="#"><span>ABOUT US</span></a>
            <a href="#">OUR STORY</a>
          </div>
          <div className="center-nav">
            <Link to="/">
              <div className="navbar-div-logo">
                <img src={logo} />
              </div>
            </Link>
          </div>
          <div className="right-nav">
            {this.getLinks()}
          </div>
        </div>
      </div>
    )
  }

  render() {
      if (this.props.loggedIn) {
        return this.getAuthNav();
      } else {
        return this.getMainNav();
      }
  }
}

export default NavBar;