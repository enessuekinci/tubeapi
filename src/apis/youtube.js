import axios from 'axios';
const KEY = 'AIzaSyBRykdgx-pC-siVHBxGLJk1eyuSM9W9yK8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
