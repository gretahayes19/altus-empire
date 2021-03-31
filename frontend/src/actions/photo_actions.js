import * as PhotoAPIUtil from '../util/photo_api_util'

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS"

// const clearDispensaries = () => {
//     return ({
//         type: CLEAR_PHOTOS
//     })
// }

// export const receiveErrors = (errors) => ({
//   type: RECEIVE_INPUT_ERRORS,
//   errors,
// });

const receivePhotos = photos => {
    return ({
        type: RECEIVE_PHOTOS,
        photos
    })
}

export const fetchPhotos = () => dispatch => {
    return PhotoAPIUtil.fetchPhotos()
        .then(photos => dispatch(receivePhotos(photos)))
}