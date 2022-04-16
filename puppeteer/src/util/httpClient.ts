import axios, {AxiosError, AxiosResponse, CancelTokenSource} from 'axios';
import environment from '../config/environment';

const {IS_PRODUCTION, BASE_API} = environment

export type CancelTokenSourceType = CancelTokenSource;
export type AxiosHttpResponse<T = object> = AxiosResponse<T>;
export type AxiosHttpError<T = any> = AxiosError<T>;

const httpClient = axios.create({
  baseURL: IS_PRODUCTION ? BASE_API : undefined,
  withCredentials: true,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject({...error})
);

export {axios, httpClient};
