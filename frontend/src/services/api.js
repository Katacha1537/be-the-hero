import axios from 'axios'

const api = axios.create({
    baseURL: 'http://host-bethehero-kg.umbler.net:3000'
})

export default api