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