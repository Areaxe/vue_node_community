import axios from 'axios';
import {BASE_URL} from 'config';

axios.interceptors.request.use(
  config => {
    //   if(config.url){
    //       config.url = BASE_URL + config.url;
    //   }
      config.withCredentials = true;
    return config;
  },
  error => {
    return Promise.reject(error.response);
  });

export default axios;
