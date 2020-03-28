import axios from 'axios'

const api = axios.create({
    baseURL: 'https://be-the-hero1537.herokuapp.com'
})

export default api;