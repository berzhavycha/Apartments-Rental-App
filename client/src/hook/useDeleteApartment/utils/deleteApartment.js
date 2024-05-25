import axios from 'axios';
import { BASE_URL } from '../../../global';

export const deleteApartment = async (id) => {
    const response = await axios.delete(`${BASE_URL}/apartments/${id}`);
    return response.data;
}