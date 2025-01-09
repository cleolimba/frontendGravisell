// src/api/index.ts
import axios from 'axios';

// Configurer Axios avec la base URL pour le backend AdonisJS
const api = axios.create({
  baseURL: 'http://localhost:3333/api', // Backend AdonisJS
});

export default api;
