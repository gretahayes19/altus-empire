import axios from "axios"

export const fetchReviews = (dispensaryId) => {
    return axios.get('/api/ratings/dispensary', {dispensaryId: dispensaryId})
};