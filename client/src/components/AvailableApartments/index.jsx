import { useMemo, useState } from "react";
import { useAvailableApartments } from "../../hook";
import { RentItem } from "../RentItem";
import { SectionLabel } from "../common";

export const AvailableApartments = () => {
    const { data } = useAvailableApartments();
    const [sortBy, setSortBy] = useState("Price: Highest First");
    const [filterByRooms, setFilterByRooms] = useState(1);

    const onFilterChange = (e) => setFilterByRooms(Number(e.target.value));
    const onSortChange = (e) => setSortBy(e.target.value);

    const filteredAndSortedApartments = useMemo(() => {
        const filtered = data?.filter(apartment => apartment.rooms === filterByRooms);

        const sorted = filtered?.sort((a, b) => {
            if (sortBy === "Price: Highest First") {
                return b.price - a.price;
            } else {
                return a.price - b.price;
            }
        });

        return sorted;
    }, [data, filterByRooms, sortBy]);

    const filterRooms = useMemo(() => {
        const roomsSet = new Set(data?.map(apartment => apartment.rooms));
        return Array.from(roomsSet);
    }, [data]);

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <SectionLabel emoji={`🤑`} label={`Available Apartments (${filteredAndSortedApartments?.length ?? 0})`} />
                <div className="flex items-center gap-4">
                    <label htmlFor="filter" className="text-lg text-gray-700">Filter By Room:</label>
                    <select
                        id="filter"
                        value={filterByRooms}
                        onChange={onFilterChange}
                        className="custom-select w-48 px-3 border border-gray-300 rounded focus:outline-none"
                    >
                        {filterRooms.map(room => (
                            <option key={room} value={room}>{room}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-4">
                    <label htmlFor="sort" className="text-lg text-gray-700">Sort By:</label>
                    <select
                        id="sort"
                        value={sortBy}
                        onChange={onSortChange}
                        className="custom-select w-48 px-3 border border-gray-300 rounded focus:outline-none"
                    >
                        <option value="Price: Highest First">Price: Highest First</option>
                        <option value="Price: Lowest First">Price: Lowest First</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {filteredAndSortedApartments?.map(item => {
                    return <RentItem key={item.id} {...item} />
                })}
            </div>
        </div>
    );
};
