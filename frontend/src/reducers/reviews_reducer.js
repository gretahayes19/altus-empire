import {
    RECEIVE_REVIEWS,
    CLEAR_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../actions/rating_actions';

export default function reviewsReducer(state = [], action) {
    // debugger;
    let newState = state.slice();
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews.data;
        case RECEIVE_REVIEW:
            newState.push(action.review.data);
            return newState;
        case REMOVE_REVIEW:
            const removeIdx = newState.findIndex(ele => ele['_id'] === action.reviewId);
            newState.splice(removeIdx, 1);
            return newState;
        case CLEAR_REVIEWS:
            return [];
        default:
            return state;
    }
}