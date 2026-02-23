import axios from "axios";

const API_URL =
  "https://697abac30e6ff62c3c59fc27.mockapi.io/contacts";

export const getContacts = () => axios.get(API_URL);

export const addContact = (data) => axios.post(API_URL, data);

export const deleteContact = (id) =>
  axios.delete(`${API_URL}/${id}`);

export const updateContact = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);
