import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import logo from "../../assets/main_logo.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownVisible: false,
    }


    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.getMainNav = this.getMainNav.bind(this);
    this.getAuthNav = this.getAuthNav.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.globalClickListener = this.globalClickListener.bind(this);
  }

  componentDidUpdate() {
    window.removeEventListener('click', this.globalClickListener);
  }

  globalClickListener(nativeEvent) {
    // console.log('global click');
    this.setState({ dropdownVisible: false }, () => {
      window.removeEventListener('click', this.globalClickListener)
    })
  }

  toggleDropdown(syntheticEvent) {
    // console.log('toggle dropdown');
    syntheticEvent.stopPropagation();
    this.setState(prevState => ({ dropdownVisible: !prevState.dropdownVisible }), () => {
      if (this.state.dropdownVisible) {
        window.addEventListener('click', this.globalClickListener)
      }
    })
  }

  handleBodyclick(syntheticEvent) {
    syntheticEvent.stopPropagation();
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
                <Link to={'/home'}>profile</Link>
                <a onClick={this.logoutUser}>logout</a>
            </div>
        );
      } else {
        return (
          <div className="landing-nav-buttons">
            <a onClick={() => this.props.openModal("login")}>login</a>
            {/* <a onClick={() => this.props.openModal("signup")}>get started</a> */}
          </div>
        );
      }
  }

  getAuthNav() {
    return (
      <div className="navbar auth-navbar-container">
        <div className="auth-navbar">
          <div className="left-nav">
            <div className="user-greeting">
              <span>hello there, {this.props.user.username}</span>
            </div>
          </div>
          <div className="center-nav">
            <Link to="/">
              <div className="navbar-div-logo">
                <img src={logo} />
              </div>
            </Link>
          </div>
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
            <a onClick={this.toggleDropdown}><span>our story</span></a>
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
        {this.state.dropdownVisible && this.getDropDown()}
      </div>
    )
  }

  getDropDown() {
    return (
      <div className="nav-dropdown" onClick={this.handleBodyclick}>
        <a className="creator"><span>Christine</span></a>
        <a className="creator"><span>Greta</span></a>
        <a className="creator"><span>Hank</span></a>
        <a className="creator"><span>Kevin</span></a>

        <h1>Front End Lead</h1>
        <h1>Team Lead</h1>
        <h1>Flex Lead</h1>
        <h1>Backend Lead</h1>
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