import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/' });

// Example usage
export const loginUser = (credentials) => API.post('users/login', credentials);

export default API;
