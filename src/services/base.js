import axios from 'axios';

export const api = () => {
    return axios.create({
        baseURL: 'https://cerasus-api.herokuapp.com/api/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}