import axios from 'axios'

const instance = axios.create({
    baseURL: 'heroku git:remote - a discussion- board - live'
})

export default instance

