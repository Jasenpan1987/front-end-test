const API_BASE = "http://localhost:5000";

const api = {
  get: ({ url, query }) => {
    let path = `${API_BASE}${url}`;
    let queryString;
    if (query) {
      queryString = Object.keys(query)
        .map(q => {
          const val = query[q];

          if (val.exact) {
            return `${q}=${val.str}`;
          }
          return `${q}_like=${val.str}`;
        })
        .join("&");

      path += `?${queryString}`;
    }

    return fetch(path).then(response => response.json());
  }
};

export { api };
