import { useQuery } from '@tanstack/react-query';
import { getApartments } from './utils';


export const useAvailableApartments = () => {
    return useQuery({
        queryKey: ['apartments'], queryFn: getApartments
    })
};
