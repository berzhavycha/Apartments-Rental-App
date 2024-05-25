import { useState } from "react"

export const useAvailableApartments = () => {
    const [data, setData] = useState([{
        id: '1',
        rooms: 3,
        name: 'Sun Hotel',
        title: 'Sun Hotel',
        days: 4,
        price: 100.00,
        description: 'Sun Hotel'
    },
    {
        id: '2',
        rooms: 2,
        name: 'Sun Hotel',
        title: 'Sun Hotel',
        days: 4,
        price: 100.00,
        description: 'Sun Hotel'
    },
    {
        id: '3',
        rooms: 1,
        name: 'Sun Hotel',
        title: 'Sun Hotel',
        days: 4,
        price: 100.00,
        description: 'Sun Hotel'
    }
    ])

    return { data }
}