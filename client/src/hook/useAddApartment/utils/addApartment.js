import axios from 'axios';

import { BASE_URL } from '../../../global';

export const addApartment = async (formData) => {
  const response = await axios.post(`${BASE_URL}/apartments`, formData);
  return response.data;
};
