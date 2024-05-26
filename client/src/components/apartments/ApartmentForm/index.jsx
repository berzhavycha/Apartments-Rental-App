import { useState } from 'react';
import { useAddApartment, useApartmentForm } from '../../../hooks';
import { Button, InputField, SectionLabel, SelectField, TextAreaField } from '../../common';
import './custom.css';

export const ApartmentForm = () => {
  const {
    name, setName,
    rooms, setRooms,
    price, setPrice,
    description, setDescription,
    clearForm,
    validateForm
  } = useApartmentForm();

  const { addApartmentHandler } = useAddApartment({
    name,
    rooms: +rooms,
    price: +price,
    description,
  });

  const [errors, setErrors] = useState({});

  const onNameChange = (e) => setName(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onRoomsChange = (e) => setRooms(e.target.value);
  const onPriceChange = (e) => setPrice(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    await addApartmentHandler(e);
    clearForm();
    setErrors({});
  };

  return (
    <div>
      <SectionLabel emoji={`🤑`} label={'Create a new rent'} />
      <form
        onSubmit={onSubmit}
        className="border border-gray-300 bg-gray-200 px-6 pt-6 pb-4 mt-4 rounded-md flex flex-wrap space-y-4"
      >
        <InputField
          label="Title"
          value={name}
          onChange={onNameChange}
          placeholder="Ex. Flat in the city center"
          errorMessage={errors.name}
        />
        <TextAreaField
          label="Description"
          value={description}
          onChange={onDescriptionChange}
          placeholder="Provide a detailed description of the apartment"
          errorMessage={errors.description}
        />
        <div className="flex items-center space-x-7">
          <SelectField
            label="Beds"
            value={rooms}
            onChange={onRoomsChange}
            options={['1', '2', '3', '4']}
            errorMessage={errors.rooms}
          />
          <InputField
            label="Rent Price"
            value={price}
            onChange={onPriceChange}
            placeholder="99.0"
            errorMessage={errors.price}
          />
          <div className="mt-1">
            <Button text="Submit rent" type="success" />
          </div>
        </div>
      </form>
    </div>
  );
};
