import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Home page

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
      this.props.history.push("/home");
    }

    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  // renderErrors() {
  //   return (
  //     <ul className="form-errors-ul">
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li className="form-errors-li" key={`error-${i}`}>
  //           {this.state.errors[error]}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  renderErrors(key) {
    return (
      <div className="form-errors">
          <span>{this.state.errors[key]}</span>
      </div>
    )
  }

  render() {
    return (
      <div className="form-div">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className={this.state.errors['email'] ? "form-input error" : "form-input"}
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />
          {this.renderErrors('email')}
          <input
            className={this.state.errors['password'] ? "form-input error" : "form-input"}
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />
          {this.renderErrors('password')}
          <button className="signup-button-login">Submit</button>
        </form>
        <div className="form-otherForm">
          <span className="form-span">New User?</span>
          <span className="signup-span"
            onClick={() => this.props.openModal("signup")}>Sign up</span>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);