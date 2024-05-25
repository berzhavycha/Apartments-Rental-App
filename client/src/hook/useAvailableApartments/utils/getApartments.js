import axios from 'axios';

import { BASE_URL } from '../../../global';

export const getApartments = async (queryParams) => {
  console.log(queryParams)
  const response = await axios.get(`${BASE_URL}/apartments`, { params: queryParams });
  return response.data;
};