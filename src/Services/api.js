import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.genius.com/songs'
});

export default api;