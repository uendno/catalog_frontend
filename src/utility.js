import prefix from './config'
const callCatalogApi = (endpoint, init) => (
  fetch(`${prefix}${endpoint}`, init)
    .then(response => response.json())
);

export default callCatalogApi;
