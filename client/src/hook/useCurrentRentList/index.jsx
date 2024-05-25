import { useState } from "react"

export const useCurrentRentList = () => {
    const [data, setData] = useState([{
        id: '',
        rooms: 3,
        name: 'Sun Hotel',
        days: 4,
        price: 100.00,
        description: 'Sun Hotel'
    }])

    return { data }
}