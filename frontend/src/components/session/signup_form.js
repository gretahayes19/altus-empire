import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker";

import './form.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      dob: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.signedIn !== this.props.signedIn) {
      this.props.login({email: this.state.email, password: this.state.password}).then(
        this.props.history.push("/home")
      )
    }

    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  componentDidMount() {
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
      dob: this.state.dob,
    };

    this.props
      .signup(user, this.props.history)
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="form-errors-li" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="form-div">
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <input
              className="form-input"
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <input
              className="form-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <input
              className="form-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <input
              className="form-input"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <label className="signup-dob-label">
              Please enter your date of birth
            </label>
            <input
              className="form-input"
              type="date"
              value={this.state.dob}
              onChange={this.update("dob")}
            />
            <input className="form-submit" type="submit" value="Submit" />
          </div>
        </form>
        <div className="form-errors signup">{this.renderErrors()}</div>
      </div>
    );
  }
}

export default withRouter(SignupForm);