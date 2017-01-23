// const API_URL = 'http://localhost:4000';
const API_URL = 'https://api.smartno.de:8443';

function getFromAPI(endpoint) {
  return fetch(`${API_URL}${endpoint}`).then(response => response.json());
}

function getStatus() {
  return getFromAPI('/status');
}

function getTransactions() {
  return getFromAPI('/transactions');
}

function getRate() {
  return getFromAPI('/ethsgd');
}

export default { getStatus, getTransactions, getRate };
