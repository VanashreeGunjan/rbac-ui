import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const getUsers = async () => axios.get(`${API_BASE}/users`);
export const addUser = async (user) => axios.post(`${API_BASE}/users`, user);
export const updateUser = async (id, user) =>
  axios.put(`${API_BASE}/users/${id}`, user);
export const deleteUser = async (id) => axios.delete(`${API_BASE}/users/${id}`);

export const getRoles = async () => axios.get(`${API_BASE}/roles`);
export const addRole = async (role) => axios.post(`${API_BASE}/roles`, role);
export const updateRole = async (id, role) =>
  axios.put(`${API_BASE}/roles/${id}`, role);
export const deleteRole = async (id) => axios.delete(`${API_BASE}/roles/${id}`);
