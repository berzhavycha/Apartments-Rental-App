import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAvailableApartments } from '../../../hook';
import { SectionLabel, SelectField } from '../../common';
import { RentItem } from '../RentItem';

export const AvailableApartments = () => {
  const [sortBy, setSortBy] = useState('Price: Highest First');
  const [filterByRooms, setFilterByRooms] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useAvailableApartments({ price: searchParams.get('price'), rooms: searchParams.get('rooms') });

  const onFilterChange = (e) => {
    const value = e.target.value === 'none' ? null : Number(e.target.value);
    setSearchParams((params) => {
      if (value) {
        params.set('rooms', value);
      } else {
        params.delete('rooms');
      }
      return params;
    });
    setFilterByRooms(value);
  };

  const onSortChange = (e) => {
    const selectedSort = e.target.value;
    let sortDirection;

    if (selectedSort === 'Price: Highest First') {
      sortDirection = 'desc';
    } else {
      sortDirection = 'asc';
    }

    setSortBy(selectedSort);
    setSearchParams({ price: sortDirection });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <SectionLabel
          emoji={`🤑`}
          label={`Available Apartments (${data?.length ?? 0})`}
        />
        <div className="flex items-center gap-4">
          <label className="text-lg text-gray-700">Filter By Room:</label>
          <SelectField
            value={filterByRooms === null ? 'none' : filterByRooms}
            onChange={onFilterChange}
            options={['none', '1', '2', '3', '4']}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="text-lg text-gray-700">Sort By:</label>
          <SelectField
            value={sortBy}
            onChange={onSortChange}
            options={['Price: Highest First', 'Price: Lowest First']}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {data?.map((item) => {
          return <RentItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
