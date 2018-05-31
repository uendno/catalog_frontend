import prefix from './config';

const callCatalogApi = (endpoint, init) => {
  const authorization = localStorage.getItem('Authorization');
  if (authorization) {
    if (!init.headers) {
      init.headers = {};
    }
    init.headers.Authorization = authorization;
  }
  return fetch(`${prefix}${endpoint}`, init)
    .then(response => response.json().then(data => ({
      status: response.status,
      data: data
    })))
};

export default callCatalogApi;
