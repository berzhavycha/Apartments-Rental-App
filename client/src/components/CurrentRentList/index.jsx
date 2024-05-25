import { useCurrentRentList } from "../../hook"
import { RentItem } from "../RentItem"
import { SectionLabel } from "../common"

export const CurrentRentList = () => {
    const { data } = useCurrentRentList()

    return (
        <div>
            <SectionLabel emoji={`🤑`} label={'Your current rent'} />
            <div className="mt-4 flex flex-col gap-4">
                {data.map(item => {
                    return <RentItem key={item.id} {...item} isRented />
                })}
            </div>
        </div>
    )
}