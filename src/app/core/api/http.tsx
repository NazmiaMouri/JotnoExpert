import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import env, {PRODUCTION} from '../../../environments/environment';

const http = axios.create({
  baseURL: env.URL,
});

const requestHandler = (request: AxiosRequestConfig) => {
  if (!PRODUCTION) {
    console.log(request.baseURL + request.url);
    if (!request.url.startsWith('/auth')) {
      request.url = '/api' + request.url;
    }
    if (request.params) {
      console.log(request.params);
    }
  }
  return request;
};

http.interceptors.request.use((request) => requestHandler(request));

const errorHandler = (error) => {
  return Promise.reject({...error});
};

const successHandler = (response) => {
  return response;
};

http.interceptors.response.use(
  (response: AxiosResponse) => successHandler(response),
  (error: AxiosError) => errorHandler(error),
);

export default http;
