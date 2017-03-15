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

function send(address, value) {
  const body = JSON.stringify({
    address,
    value,
  });
  console.log(body);
  return fetch(`${API_URL}/send`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  });
}

export default { getStatus, getTransactions, getRate, send };
