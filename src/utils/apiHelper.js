const API_BASE = "http://localhost:5000";

const api = {
  get: url => fetch(`${API_BASE}${url}`).then(response => response.json())
};

export { api };
