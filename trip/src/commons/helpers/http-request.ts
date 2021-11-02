import fetchIntercept from 'fetch-intercept';
import cookie from 'js-cookie';
import AbortController from 'node-abort-controller';
import { Config } from '../constants';

async function fetchWithTimeout(url:string, options:any) {
  const { timeout = 40000 } = options; // default timeout

  const timeoutSignal = options.signal || new AbortController();
  const id = setTimeout(() => timeoutSignal.abort(), timeout);

  const response = await fetch(url, {
    ...options,
    signal: timeoutSignal.signal
  });
  clearTimeout(id);

  return response;
}

export interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void;
  graph: () => any;
}

interface iConfig {
  headers: any,
  baseURL: string,
}

fetchIntercept.register({
  request(url, config) {
    // Modify the url or config here
    console.log('%cHTTP_REQUEST =', 'font-size: 20; font-weight: bold; color: black', config);
    return [url, config];
  },

  requestError(error) {
    // Called when an error occured during another 'request' interceptor call
    console.log('%cHTTP_REQUEST_ERROR =', 'font-size: 20; font-weight: bold; color: red', error);
    return Promise.reject(error);
  },

  response(response) {
    // Modify the reponse object
    console.log('%cHTTP_RESPONSE_SUCCESS =', 'font-size: 20; font-weight: bold; color: green', response);
    return response;
  },

  responseError(error) {
    // Handle an fetch error
    console.log('%cHTTP_REQUEST_ERROR =', 'font-size: 20; font-weight: bold; color: red', error);
    return Promise.reject(error);
  }
});

const fetchClient = (abortController:any) => {
  const token = cookie.get('jwtToken');

  const httpConfig: iConfig = {
    headers: {
      Authorization: `Basic ${Config.auth}`,
      'Content-Type': 'application/json',
      timeout: 10000,
    },
    baseURL: Config.graphqlEndpoint,
  };

  if (token) {
    httpConfig.headers['X-Authorization'] = `JWT ${token}`;
  }

  const httpClient:any = {
    graph: () => (data:any) => fetchWithTimeout(httpConfig.baseURL, {
      method: 'POST',
      headers: httpConfig.headers,
      body: JSON.stringify(data),
      signal: abortController
    })
  };

  return httpClient as PromiseWithCancel<any>;
};

export default fetchClient;
