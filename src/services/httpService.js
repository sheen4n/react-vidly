import axios from 'axios';
import logger from './logService';
import { toast } from 'react-toastify';
import config from '../config.json';

axios.defaults.baseURL = process.env.REACT_APP_API_URL || config.apiEndPoint;

axios.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error('An unexpected error occurrred.');
  }

  return Promise.reject(error);
});

export function setHttpJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};