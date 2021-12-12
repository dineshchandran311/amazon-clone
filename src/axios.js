import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-cd311/us-central1/api' // THE API (cloud function) URL
});

export default instance;