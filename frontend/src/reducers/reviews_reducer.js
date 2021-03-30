import {
    RECEIVE_REVIEWS,
    CLEAR_REVIEWS
} from '../actions/rating_actions';

export default function reviewsReducer(state = [], action) {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews.data;
        case CLEAR_REVIEWS:
            return [];
        default:
            return state;
    }
}