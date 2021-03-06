import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker";

import '../../styles/form.css'

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

  renderErrors(key) {
    return (
      <div className="form-errors">
        <span>{this.state.errors[key]}</span>
      </div>
    )
  }

  render() {
    return (
      <div className="form-div signup">
        <div className="form-otherForm-login">
          <span className="form-span">Already have an account?</span>
          <span className="signup-span"
            onClick={() => this.props.openModal("login")}>Log in</span>
        </div>
        <form onSubmit={this.handleSubmit}>

          <div className="form">
            <input
              className={this.state.errors['email'] ? "form-input error" : "form-input"}
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            {this.renderErrors('email')}
            <input
              className={this.state.errors['username'] ? "form-input error" : "form-input"}
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            {this.renderErrors('username')}
            <input
              className={this.state.errors['password'] ? "form-input error" : "form-input"}
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            {this.renderErrors('password')}
            <input
              className={this.state.errors['password2'] ? "form-input error" : "form-input"}
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            {this.renderErrors('password2')}
            <label className="signup-dob-label">
              <p>Please enter your date of birth</p>
            </label>
            <input
              className={this.state.errors['dob'] ? "form-input error" : "form-input"}
              type="date"
              value={this.state.dob}
              onChange={this.update("dob")}
            />
            {this.renderErrors('dob')}

            <button className="signup-button">Submit</button>
            {/* <input className="form-submit" type="submit" value="Submit" /> */}

          </div>
        </form>
        {/* <div className="form-errors signup">{this.renderErrors()}</div> */}
      </div>
    );
  }
}

export default withRouter(SignupForm);