import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://smktesting.herokuapp.com',
});

export default instance;
