import React from 'react'
import '../../styles/dispensary.css';
import ReactStars from "react-rating-stars-component";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.initialState;

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state).then(this.setState(this.props.initialState)); 
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }


    render() {

        const starOps = {
            size: 30,
            value: 2.5,
            isHalf: false,
            onChange: newValue => {
                this.setState({ rating: newValue })
            }
        };
        
        return (
                <div className="review-container">
                    <form onSubmit={this.handleSubmit} className="review-form">
                        <p>Rating</p>
                         <ReactStars {...starOps} />
{/* 
                        <div className="rating-select" onChange={this.update("rating")}>
                            <label className="review-star">★
                            <input type="radio" name="rating" value="5" />
                            </label>

                            <label className="review-star">★
                            <input type="radio" name="rating" value="4" />
                            </label>

                            <label className="review-star">★
                            <input type="radio" name="rating" value="3" />
                            </label>

                            <label className="review-star">★
                            <input type="radio" name="rating" value="2" />
                            </label>

                            <label className="review-star">★
                            <input type="radio" name="rating" value="1" required />
                            </label>
                        </div> */}
                        {/* <p>Date</p>
                        <input
                            type="date"
                            className="text-input"
                            placeholder="Date"
                            value={this.state.date}
                            onChange={this.update("date")}
                            required /> */}
                        <p>Review</p>
                        <textarea
                            className="text-input review-text"
                            placeholder="Share your thoughts about this dispensary!"
                            value={this.state.review}
                            onChange={this.update("review")}
                            required />
                        <button className="write-review-button">Submit Review</button>
                    </form>
                </div>
        )
    }
}

export default ReviewForm