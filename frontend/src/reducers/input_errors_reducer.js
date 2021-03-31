import {RECEIVE_INPUT_ERRORS} from "../actions/rating_actions";

const _nullErrors = [];

const InputErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_INPUT_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default InputErrorsReducer;