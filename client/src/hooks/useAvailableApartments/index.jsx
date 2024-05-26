import { useQuery } from '@tanstack/react-query';

import { getApartments } from './utils';

export const useAvailableApartments = (queryParams) => {
  return useQuery({
    queryKey: ['apartments', queryParams], 
    queryFn: () => getApartments(queryParams), 
  });
};