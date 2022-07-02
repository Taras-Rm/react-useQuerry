import axios from 'axios';

const baseUrl = "http://localhost:3002"

export const getAllUsers = async () => {
  const data = await axios.get(`${baseUrl}/users`);
  return data.data;
};

export const createUser = async (user) => {
  const data = await axios.post(`${baseUrl}/users`, user);
  return data.data;
};

export const deleteUser = async (id) => {
  const data = await axios.delete(`${baseUrl}/users/${id}`);
  return data.data;
};
