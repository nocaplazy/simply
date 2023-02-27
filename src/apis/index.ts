import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://open.neis.go.kr',
  timeout: 10000,
  params: {
    Type: 'json',
    KEY: process.env.APP_API_KEY,
  },
});

export default instance;
