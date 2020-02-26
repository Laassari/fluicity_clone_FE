const API_ENDPOINT = 'http://localhost:3000';

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

export default Api;
