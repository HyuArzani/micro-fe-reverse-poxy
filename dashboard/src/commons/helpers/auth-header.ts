import { Config } from '../constants';
// eslint-disable-next-line
export function authHeader(jwt = null) {
  // return authorization header with jwt token
  // let user = localStorage ? JSON.parse(localStorage.getItem('user')) : {};
  const header = {
    Authorization: `Basic ${Config.auth}`,
    'Content-Type': 'application/json',
  } as any;
  if (jwt) {
    header['X-Authorization'] = `JWT ${jwt}`;
  }
  return header;
}
