import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteApartment } from './utils';

export const useDeleteApartment = () => {
  const queryClient = useQueryClient();

  const deleteApartmentMutation = useMutation({
    mutationFn: deleteApartment,
    onSuccess: () => {
      queryClient.invalidateQueries('apartments');
    },
  });

  const deleteApartmentHandler = async (id) => {
    deleteApartmentMutation.mutate(id);
  };

  return {
    deleteApartmentHandler,
  };
};
