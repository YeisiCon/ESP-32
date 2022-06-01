
const API = 'http://192.168.0.247:80'

export const fetchRequest = async (url, config) => {
    let { method, headers, body, time } = config;
    let timeout = time || 3000;
    if (method != 'GET') { body = JSON.stringify(body); headers = { 'Content-Type': 'application/json', ...headers } };
    return new Promise((resolve, reject) => {
        fetch(`${API}/${url}`, { body, method, headers: { ...headers }})
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject({ error }));
        setTimeout(reject.bind(null, { response: 408, message: "Request timeout" }), timeout)
    })
}