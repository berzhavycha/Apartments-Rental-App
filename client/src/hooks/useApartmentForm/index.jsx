import { useState } from 'react';

export const useApartmentForm = () => {
  const [name, setName] = useState('');
  const [rooms, setRooms] = useState(1);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const clearForm = () => {
    setName('');
    setRooms(1);
    setPrice('');
    setDescription('');
  };

  const validateForm = () => {
    const errors = {};
    if (!name || name.length > 99) {
      errors.name = 'Apartment name cannot be empty and must be less than 100 characters.';
    }
    if (!rooms || isNaN(rooms) || rooms <= 0) {
      errors.rooms = 'Number of rooms must be a number greater than 0.';
    }
    if (!price || isNaN(price) || price <= 0) {
      errors.price = 'Price must be a number greater than 0.';
    }
    if (description.length > 999) {
      errors.description = 'Description must be less than 1000 characters.';
    }
    return errors;
  };

  return {
    name,
    setName,
    rooms,
    setRooms,
    price,
    setPrice,
    description,
    setDescription,
    clearForm,
    validateForm,
  };
};
