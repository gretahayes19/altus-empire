import axios from "axios"

export const fetchReviews = (dispensaryId) => {
    return axios.get(`/api/ratings/dispensary/${dispensaryId}`)
};

export const createReview = (review) => {
    return axios.post('/api/ratings', review)
};  

export const deleteReview = (reviewId) => {
    return axios.delete(`/api/ratings/${reviewId}`)
}