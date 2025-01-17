import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
});

export const login = (username: string, password: string) =>
    api.post('/auth/login', { username, password });

export const register = (username: string, password: string, role: string) =>
    api.post('/auth/register', { username, password, role });
