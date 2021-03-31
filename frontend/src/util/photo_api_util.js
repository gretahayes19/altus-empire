import axios from "axios"

export const fetchPhotos = () => {
    return axios.get('/api/photo/all')
};