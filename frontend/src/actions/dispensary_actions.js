import * as DispensaryAPIUtil from '../util/dispensary_api_util'

export const RECEIVE_DISPENSARIES = "RECEIVE_DISPENSARIES"
export const CLEAR_DISPENSARIES = "CLEAR_DISPENSARIES"

const receiveDispensaries = (dispensaries) => {
    return ({
        type: RECEIVE_DISPENSARIES,
        dispensaries
    })
}

const clearDispensaries = () => {
    return ({
        type: CLEAR_DISPENSARIES
    })
}

export const fetchDispensaries = () => (dispatch) => {
    return DispensaryAPIUtil.fetchDispensaries()
    .then(dispensaries => dispatch(receiveDispensaries(dispensaries)))
}

