import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.coinlore.net/api',
});
// request.interceptors.request.use(async config => {
//   console.log('Request...');
//   config.headers.Accept = 'application/json';
//   return config;
// });

export default request;
