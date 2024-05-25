import { useState } from 'react';

import { useDeleteApartment } from '../../../hook';
import { Button } from '../../common';

export const RentItem = ({ id, name, rooms, days, price, description }) => {
  const [showDescription, setShowDescription] = useState(false);
  const { deleteApartmentHandler } = useDeleteApartment();

  const toggleDescription = () => setShowDescription((prevState) => !prevState);

  const onDelete = async () => await deleteApartmentHandler(id);

  return (
    <div className="flex flex-col bg-white p-6 rounded-md items-start border border-gray-300">
      <div className="flex justify-between w-full items-center">
        <p>
          {name} / {rooms} {`${rooms > 1 ? 'beds' : 'bed'}`} / {days}{' '}
          {`${days > 1 ? 'days' : 'day'}`} / ${price}
        </p>
        <div className="flex gap-4">
          <Button type="reject" text={'Delete'} onClick={onDelete} />
          <Button
            type="success"
            text={showDescription ? 'Hide Details' : 'Show Details'}
            onClick={toggleDescription}
          />
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
