import * as RatingAPIUtil from '../util/rating_api_util'

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"
export const CLEAR_REVIEWS = "CLEAR_REVIEWS"
export const RECEIVE_INPUT_ERRORS = "RECEIVE_INPUT_ERRORS"


const clearDispensaries = () => {
    return ({
        type: CLEAR_REVIEWS
    })
}

export const receiveErrors = (errors) => ({
  type: RECEIVE_INPUT_ERRORS,
  errors,
});

const receiveReviews = (reviews) => {
    return ({
        type: RECEIVE_REVIEWS,
        reviews
    })
}

const receiveReview = (review) => {
    return ({
        type: RECEIVE_REVIEW,
        review
    })
}

const removeReview = (reviewId) => {
    return ({
        type: REMOVE_REVIEW,
        reviewId
    })
}


export const fetchReviews = (dispensaryId) => (dispatch) => {
    return RatingAPIUtil.fetchReviews(dispensaryId)
        .then(reviews => dispatch(receiveReviews(reviews)))
}

export const createReview = review => dispatch => {
    return RatingAPIUtil.createReview(review).then(
        review => dispatch(receiveReview(review))).catch(
            err => dispatch(receiveErrors(err.response.data))
        )
}

export const deleteReview = reviewId => dispatch => {
    return RatingAPIUtil.deleteReview(reviewId).then(
        () => dispatch(removeReview(reviewId)).catch(
            err => dispatch(receiveErrors(err.response.data))
        )
    )
}