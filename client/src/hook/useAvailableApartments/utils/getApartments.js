import axios from 'axios';
import { BASE_URL } from '../../../global';

export const getApartments = async () => {
    const response = await axios.get(`${BASE_URL}/apartments`);
    return response.data;
}