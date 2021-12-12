import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://git.heroku.com/amazon-clone-cd-311.git' // THE API (cloud function) URL
});

export default instance;