import axios from 'axios';

export const fetchSearchResults = (query) => {
    return axios.get(`/api/searches?query=${query}`)
}