const API_URL = 'http://localhost:4000';

function getStatus() {
  return fetch(`${API_URL}/status`).then(response => response.json());
}

export default { getStatus };
