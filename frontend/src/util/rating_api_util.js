import axios from "axios"

export const fetchReviews = (dispensaryId) => {
    return axios.get('/api/ratings/dispensary', {dispensaryId: dispensaryId})
};

export const createReview = (review) => {
    return axios.post('/api/ratings/new', review)
};  