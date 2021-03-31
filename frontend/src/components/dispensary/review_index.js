import React from 'react'

import ReactStars from "react-rating-stars-component";

const ReviewIndex = ({ reviews }) => {

    const starOps = {
            size: 30,
            isHalf: false,
            edit: false,
            color: "#94D7C5",
            activeColor: "#F6CB24"
    };

    return (
        <ul className="review-index">
            {reviews.map((review, idx) => (
                <li className="review-item" key={review._id}>
                    <p>{review.review}</p>
                    <ReactStars value={review.rating} {...starOps} />


                </li>
            ))}
        </ul>
    )
}

export default ReviewIndex

