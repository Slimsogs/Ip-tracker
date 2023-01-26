import axios from 'axios'
const KEY = "at_59UawBJ2ooq2SOh7jBdJoj4XyAtd9"

export default axios.create({
    baseURL: 'https://geo.ipify.org/api/v2',    
    params: {
        apiKey: KEY
    }

})