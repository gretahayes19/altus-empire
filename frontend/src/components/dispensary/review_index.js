import React from 'react'
const ReviewIndex = ({ reviews }) => {


    return (
        <ul className="review-index">
            {reviews.map((review, idx) => (
                <li className="review-item" key={review._id}>
                    <p>{review.review}</p>
                    <p>{review.rating}</p>

                </li>
            ))}
        </ul>
    )
}

export default ReviewIndex

