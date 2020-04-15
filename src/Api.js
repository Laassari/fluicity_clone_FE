import { create } from 'apisauce';

export const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT || 'http://localhost:9090';

async function Api({
  method = 'GET',
  url = '',
  headers = {},
  data = {},
  config = {}
} = {}) {
  const endpoint = url.startsWith('http') ? url : `${API_ENDPOINT}${url}`;
  const response = await fetch(endpoint, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    body: ['GET', 'HEAD'].includes(method) ? null : JSON.stringify(data),
    ...config
  });
  return response.json();
}

export function http(options = {}) {
  const config = {
    baseURL: API_ENDPOINT
  };
  return create({ ...config, ...options });
}

export default Api;
