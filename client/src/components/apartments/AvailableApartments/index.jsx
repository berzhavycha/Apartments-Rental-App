import { useMemo, useState } from "react";
import { useAvailableApartments } from "../../../hook";
import { RentItem } from "../RentItem";
import { SectionLabel, SelectField } from "../../common";

export const AvailableApartments = () => {
    const { data } = useAvailableApartments();
    const [sortBy, setSortBy] = useState("Price: Highest First");
    const [filterByRooms, setFilterByRooms] = useState(null); 

    const onFilterChange = (e) => {
        const value = e.target.value === "none" ? null : Number(e.target.value); 
        setFilterByRooms(value);
    };
    const onSortChange = (e) => setSortBy(e.target.value);

    const filteredAndSortedApartments = useMemo(() => {
        let filtered = data;
        if (filterByRooms !== null) {
            filtered = filtered?.filter(apartment => apartment.rooms === filterByRooms);
        }

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
        const roomsSet = new Set(data?.map(apartment => apartment.rooms).sort());
        return ["none", ...Array.from(roomsSet)]; 
    }, [data]);

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <SectionLabel emoji={`🤑`} label={`Available Apartments (${filteredAndSortedApartments?.length ?? 0})`} />
                <div className="flex items-center gap-4">
                    <label className="text-lg text-gray-700">Filter By Room:</label>
                    <SelectField
                        value={filterByRooms === null ? "none" : filterByRooms}
                        onChange={onFilterChange}
                        options={filterRooms}
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
                {filteredAndSortedApartments?.map(item => {
                    return <RentItem key={item.id} {...item} />
                })}
            </div>
        </div>
    );
};
