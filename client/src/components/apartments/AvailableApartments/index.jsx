import { useAvailableApartments, useQueryParams  } from '../../../hooks';
import { SectionLabel, SelectField } from '../../common';
import { RentItem } from '../RentItem';

export const AvailableApartments = () => {
  const [params, setParams] = useQueryParams({ price: 'desc', rooms: null });

  const { data } = useAvailableApartments({
    price: params.price,
    rooms: params.rooms,
  });

  const onFilterChange = (e) => {
    const value = e.target.value === 'none' ? null : e.target.value;
    setParams((prevParams) => ({
      ...prevParams,
      rooms: value,
    }));
  };

  const onSortChange = (e) => {
    const selectedSort = e.target.value;
    const sortDirection = selectedSort === 'Price: Highest First' ? 'desc' : 'asc';
    setParams((prevParams) => ({
      ...prevParams,
      price: sortDirection,
    }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <SectionLabel emoji="🤑" label={`Available Apartments (${data?.length ?? 0})`} />
        <div className="flex items-center gap-4">
          <label className="text-lg text-gray-700">Filter By Room:</label>
          <SelectField
            value={params.rooms ?? 'none'}
            onChange={onFilterChange}
            options={['none', '1', '2', '3', '4']}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="text-lg text-gray-700">Sort By:</label>
          <SelectField
            value={params.price === 'desc' ? 'Price: Highest First' : 'Price: Lowest First'}
            onChange={onSortChange}
            options={['Price: Highest First', 'Price: Lowest First']}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {data?.map((item) => (
          <RentItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
