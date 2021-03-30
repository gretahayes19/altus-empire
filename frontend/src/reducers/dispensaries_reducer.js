import { RECEIVE_DISPENSARIES, CLEAR_DISPENSARIES } from '../actions/dispensary_actions';

export default function dispensariesReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DISPENSARIES:
            return action.dispensaries;
        case CLEAR_DISPENSARIES:
            return {};
        default:
            return state;
    }
}