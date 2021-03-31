import {
    RECEIVE_REVIEWS,
    CLEAR_REVIEWS,
    RECEIVE_REVIEW
} from '../actions/rating_actions';

export default function reviewsReducer(state = [], action) {
    let newState = state.slice();
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews.data;
        case RECEIVE_REVIEW:
            newState.push(action.review);
            return newState;
        case CLEAR_REVIEWS:
            return [];
        default:
            return state;
    }
}