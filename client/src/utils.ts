import axios from 'axios';
import config from './config';

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? config.apiUrl : '/'
});
