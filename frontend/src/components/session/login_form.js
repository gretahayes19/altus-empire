import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Home page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/home');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user).then(this.props.closeModal()); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul className="form-errors-ul">
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
        <form className="form" onSubmit={this.handleSubmit}>
              <input 
                className="form-input"
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <input 
                className="form-input"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <input 
                className="form-submit"
                type="submit" 
                value="Submit" 
              />
          </form>
          <div className="form-errors">
            {this.renderErrors()}
          </div>
        <div className="form-otherForm">
          <span className="form-span">New User?</span>
          <button 
            className="form-submit otherForm"
            onClick={() => this.props.openModal('signup')}>
              Sign up
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);