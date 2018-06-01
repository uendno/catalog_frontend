import prefix from './config';

const callCatalogApi = (endpoint, init) => {
  const authorization = localStorage.getItem('Authorization');
  if (authorization) {
    if (!init.headers) {
      // eslint-disable-next-line no-param-reassign
      init.headers = {};
    }
    // eslint-disable-next-line no-param-reassign
    init.headers.Authorization = authorization;
  }
  return fetch(`${prefix}${endpoint}`, init)
    .then(response => response.json().then(data => ({
      status: response.status,
      jsonResponse: data,
    })));
};

const createDelete = (endpoint, refresh, redirect) => ((event) => {
  event.preventDefault();
  callCatalogApi(endpoint, {
    method: 'DELETE',
  }).then((response) => {
    if (response.status === 200) {
      refresh();
    } else if (response.status === 403) {
      redirect();
    }
  });
});

export { callCatalogApi, createDelete };
