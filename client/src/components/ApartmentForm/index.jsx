import { useState } from 'react';
import { Button, SectionLabel } from '../common';
import './custom.css';
import { InputField, TextAreaField, SelectField } from '../common';
import { useAddApartment } from '../../hook';

export const ApartmentForm = () => {
    const [name, setName] = useState('');
    const [rooms, setRooms] = useState(1);
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const { handleSubmit } = useAddApartment({ name, rooms, price: +price, description })

    return (
        <div>
            <SectionLabel emoji={`🤑`} label={'Create a new rent'} />
            <form onSubmit={handleSubmit} className="border border-gray-300 bg-gray-200 p-6 mt-4 rounded-md flex flex-wrap space-y-4">
                <InputField
                    label="Title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex. Flat in the city center"
                />
                <TextAreaField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide a detailed description of the apartment"
                />
                <div className="flex items-center space-x-7">
                    <SelectField
                        label="Beds"
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                        options={['1', '2', '3+']}
                    />
                    <InputField
                        label="Rent Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
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
