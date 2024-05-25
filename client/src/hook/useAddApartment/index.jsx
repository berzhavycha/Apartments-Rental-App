import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addApartment } from './utils';

export const useAddApartment = (formData) => {
    const queryClient = useQueryClient();

    const createApartmentMutation = useMutation({
        mutationFn: addApartment,
        onSuccess: () => {
            queryClient.invalidateQueries('apartments');
        },
    });

    const addApartmentHandler = async (event) => {
        event.preventDefault();
        createApartmentMutation.mutate(formData);
    };

    return {
        addApartmentHandler,
    };
};

