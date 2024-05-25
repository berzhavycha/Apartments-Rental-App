import { useState } from 'react';
import { Button, SectionLabel, InputField, TextAreaField, SelectField } from '../../common';
import './custom.css';
import { useAddApartment } from '../../../hook';

export const ApartmentForm = () => {
    const [name, setName] = useState('');
    const [rooms, setRooms] = useState(1);
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const { addApartmentHandler } = useAddApartment({ name, rooms: +rooms, price: +price, description })

    const onNameChange = (e) => setName(e.target.value)
    const onDescriptionChange = (e) => setDescription(e.target.value)
    const onRoomsChange = (e) => setRooms(e.target.value)
    const onPriceChange = (e) => setPrice(e.target.value)

    const clearForm = () => {
        setName('');
        setRooms(1);
        setPrice('');
        setDescription('');
    }

    const onSubmit = async (e) => {
        await addApartmentHandler(e)
        clearForm
    }

    return (
        <div>
            <SectionLabel emoji={`🤑`} label={'Create a new rent'} />
            <form onSubmit={onSubmit} className="border border-gray-300 bg-gray-200 p-6 mt-4 rounded-md flex flex-wrap space-y-4">
                <InputField
                    label="Title"
                    value={name}
                    onChange={onNameChange}
                    placeholder="Ex. Flat in the city center"
                />
                <TextAreaField
                    label="Description"
                    value={description}
                    onChange={onDescriptionChange}
                    placeholder="Provide a detailed description of the apartment"
                />
                <div className="flex items-center space-x-7">
                    <SelectField
                        label="Beds"
                        value={rooms}
                        onChange={onRoomsChange}
                        options={['1', '2', '3', '4']}
                    />
                    <InputField
                        label="Rent Price"
                        value={price}
                        onChange={onPriceChange}
                        placeholder="99.0"
                    />
                    <div className='mt-7'>
                        <Button text="Submit rent" type="success" />
                    </div>
                </div>
            </form>
        </div>
    );
};
