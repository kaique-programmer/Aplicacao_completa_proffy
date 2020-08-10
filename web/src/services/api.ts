import axios from 'axios'; // Faz o mesmo processo de requisições do insomnia

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;