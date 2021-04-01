import React from "react";
import "../../styles/dispensary.css";
import ReactStars from "react-rating-stars-component";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createReview(this.state)
      .then(this.setState(this.props.initialState));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.initialState.errors !== this.props.initialState.errors) {
      this.setState({ errors: this.props.initialState.errors });
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    return (
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
    const starOps = {
      size: 30,
      value: 2.5,
      isHalf: false,
      color: "#94D7C5",
      activeColor: "#F6CB24",
      emptyIcon: <i className="fas fa-cannabis"></i>,
      filledIcon: <i className="fas fa-cannabis"></i>,
      onChange: (newValue) => {
        this.setState({ rating: newValue });
      },
    };

    return (
      <div className="review-container">
        <form onSubmit={this.handleSubmit} className="review-form">
          <p>Rating</p>
          <ReactStars {...starOps} />

          <p>Review</p>
          <textarea
            className="text-input review-text"
            placeholder="Share your thoughts about this dispensary!"
            value={this.state.review}
            onChange={this.update("review")}
            required
          />
          <button className="write-review-button">Submit Review</button>
        </form>
        <div className="review-errors">{this.renderErrors()}</div>
      </div>
    );
  }
}

export default ReviewForm;