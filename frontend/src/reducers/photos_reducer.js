import {
    RECEIVE_PHOTOS
} from '../actions/photo_actions.js';

export default function photosReducer(state = [], action) {
    let newState = state.slice();
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return action.photos.data;
        // case CLEAR_PHOTOS:
        //     return [];
        default:
            return state;
    }
}
