import { useState } from 'react';
import { Button, SectionLabel } from '../common';
import './custom.css';

export const ApartmentForm = () => {
    const [title, setTitle] = useState('');
    const [days, setDays] = useState('');
    const [beds, setBeds] = useState('');
    const [rentPrice, setRentPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { title, days, beds, rentPrice, description };
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div>
            <SectionLabel emoji={`🤑`} label={'Create a new rent'} />
            <form onSubmit={handleSubmit} className="border border-gray-300 bg-gray-200 p-6 mt-4 rounded-md flex flex-wrap space-y-4">
                <div className="w-full">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Ex. Flat in the city center"
                        className="bg-white w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Provide a detailed description of the apartment"
                        className="bg-white w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        rows="4"
                        style={{ resize: 'none' }}
                    />
                </div>
                <div className="flex items-center space-x-7">
                    <div className="w-20">
                        <label htmlFor="days" className="block text-gray-700 text-sm font-bold mb-2">
                            Days
                        </label>
                        <input
                            type="number"
                            id="days"
                            placeholder='4'
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        />
                    </div>
                    <div className="w-20">
                        <label htmlFor="beds" className="block text-gray-700 text-sm font-bold mb-2">
                            Beds
                        </label>
                        <select
                            id="beds"
                            value={beds}
                            onChange={(e) => setBeds(e.target.value)}
                            className="custom-select w-full px-3 border border-gray-300 py-2 rounded focus:outline-none"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3+">3+</option>
                        </select>
                    </div>
                    <div className="w-25">
                        <label htmlFor="rentPrice" className="block text-gray-700 text-sm font-bold mb-2">
                            Rent Price
                        </label>
                        <input
                            type="number"
                            id="rentPrice"
                            placeholder='99.0'
                            value={rentPrice}
                            onChange={(e) => setRentPrice(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        />
                    </div>
                    <div className='mt-7'>
                        <Button text="Submit rent" type="success" />
                    </div>
                </div>
            </form>
        </div>
    );
};
