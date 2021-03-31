import axios from "axios"

export const fetchDispensaries = () => {
    return axios.get('/api/map/all')
};