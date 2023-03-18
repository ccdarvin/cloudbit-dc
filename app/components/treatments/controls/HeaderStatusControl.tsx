import { useEffect } from "react"
import { TREATMENT_TYPES_ENUM } from "../constants";
import HeaderStatusField from "../fields/HeaderStatusField";


export default function HeaderStatusControl({
    items,
    value,
    onChange
}: {
    items?: any[],
    value?: string;
    onChange?: (value: string) => void;
}) {

    // show canceled status if only all items are canceled
    // show finished status if all items are finished
    // show in_progress status if any item is in_progress
    // show acepted status if any item is acepted
    // show planned status if any item is planned
    useEffect(() => {
        if (items) {
            let statusValue: string = TREATMENT_TYPES_ENUM.planned
            if (items.every(item => item.status === TREATMENT_TYPES_ENUM.canceled)) {
                statusValue = TREATMENT_TYPES_ENUM.canceled
            }
            else if (items.every(item => item.status === TREATMENT_TYPES_ENUM.finished)) {
                statusValue = TREATMENT_TYPES_ENUM.finished
            }
            else if (items.some(item => item.status === TREATMENT_TYPES_ENUM.in_progress)) {
                statusValue = TREATMENT_TYPES_ENUM.in_progress
            }
            else if (items.some(item => item.status === TREATMENT_TYPES_ENUM.accepted)) {
                statusValue = TREATMENT_TYPES_ENUM.accepted
            }
            onChange?.(statusValue)
        }
    }, [items])
    

    return <HeaderStatusField value={value} />
}

