import React from 'react'

import ReactStars from "react-rating-stars-component";
import { fetchReviews } from '../../actions/rating_actions';

const ReviewIndex = ({ reviews, userId, deleteReview }) => {
    const starOps = {
            size: 30,
            isHalf: false,
            edit: false,
            color: "#94D7C5",
            activeColor: "#F6CB24",
            emptyIcon: <i className="fas fa-cannabis"></i>,
            filledIcon: < i className= "fas fa-cannabis" ></i>
    };

    // console.log(reviews.length);
    return (
        <ul className="review-index" key={reviews}>
            {reviews.map((review, idx) => (
                <li className="review-item" key={review._id}>
                    <header>
                        <p className="review-username">{review.username}</p>
                        <p><span className="review-date">Date:</span> {review.date.slice(5, 10).concat("-".concat(review.date.slice(2, 4)))}</p>
                    </header>
                    <p> 
                        {review.review}
                        {review.user === userId && <button key={idx} onClick={() => deleteReview(review._id)}>delete</button>}
                    </p>
                    <ReactStars value={review.rating} {...starOps} />
                </li>
            ))}
        </ul>
    );
}

export default ReviewIndex

