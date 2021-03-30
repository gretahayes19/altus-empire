import * as RatingAPIUtil from '../util/rating_api_util'

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const CLEAR_REVIEWS = "CLEAR_REVIEWS"


const clearDispensaries = () => {
    return ({
        type: CLEAR_REVIEWS
    })
}

const receiveReviews = (reviews) => {
    return ({
        type: RECEIVE_REVIEWS,
        reviews
    })
}

export const fetchReviews = (dispensaryId) => (dispatch) => {
    return RatingAPIUtil.fetchReviews(dispensaryId)
        .then(reviews => dispatch(receiveReviews(reviews)))
}

