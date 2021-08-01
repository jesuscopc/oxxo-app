import axios, { Method, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ResponseHandler } from 'interfaces/Http.interface';

function get(url: string, customHeaders?: unknown, params?: unknown): Promise<ResponseHandler> {
  return SendRequest('get', url, null, customHeaders, params);
}

function SendRequest(
  httpMethod: Method,
  url: string,
  body?: unknown,
  headers?: unknown,
  params?: unknown
) {
  const requestConfig: AxiosRequestConfig = {
    method: httpMethod,
    url,
    data: body,
    headers: headers,
    params
  };
  return axios.request(requestConfig).then(successHandler).catch(errorHandler);
}

function successHandler(response: AxiosResponse): Promise<ResponseHandler> {
  const result: ResponseHandler = {
    success: true,
    status: response.status,
    headers: response.headers,
    data: response.data,
    message: 'ok'
  };
  return Promise.resolve(result);
}

function errorHandler(): Promise<ResponseHandler> {
  const result: ResponseHandler = {
    success: false,
    status: 500,
    headers: {},
    data: {},
    message: 'unknow http wrapper error'
  };
  return Promise.reject(result);
}

export { get };
