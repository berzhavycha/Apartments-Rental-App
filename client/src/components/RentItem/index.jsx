import { useState } from "react";
import { Button } from "../common";

export const RentItem = ({ name, rooms, days, price, isRented, description }) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    return (
        <div className="flex flex-col bg-white p-6 rounded-md items-start border border-gray-300">
            <div className="flex justify-between w-full items-center">
                <p>{name} / {rooms} {`${rooms > 1 ? 'beds' : 'bed'}`} / {days} {`${days > 1 ? 'days' : 'day'}`} / ${price}</p>
                <div className="flex gap-4">
                    {!isRented && <Button type="primary" text="Rent" />}
                    <Button type="reject" text={isRented ? "Cancel" : "Delete"} />
                    <Button type="success" text={showDescription ? "Hide Details" : "Show Details"} onClick={toggleDescription} />
                </div>
            </div>
            {showDescription && (
                <div className="mt-4">
                    <p className="text-gray-700">{description}</p>
                </div>
            )}
        </div>
    );
};
