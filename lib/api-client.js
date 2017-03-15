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

function services(serviceId, params) {
  const body = JSON.stringify(params);
  return fetch(`${API_URL}/services/${serviceId}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  });
}

function send(address, value) {
  const body = JSON.stringify({
    address,
    value,
  });
  return fetch(`${API_URL}/send`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  });
}

export default { getStatus, getTransactions, getRate, send, services };
