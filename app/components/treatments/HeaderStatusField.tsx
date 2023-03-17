import { Badge } from "antd"
import colors from "../colors"



export default function HeaderStatusField({
    items // lista
}: {
    items?: any[]
}) {

    // show canceled status if only all items are canceled
    // show finished status if all items are finished
    // show in_progress status if any item is in_progress
    // show acepted status if any item is acepted
    const getStatus = () => {
        const status = items?.map(item => item.status)
        if (status) {
            if (status.every(item => item === 'canceled')) return 'canceled'
            if (status.every(item => item === 'finished')) return 'finished'
            if (status.some(item => item === 'in_progress')) return 'in_progress'
            if (status.some(item => item === 'acepted')) return 'acepted'
        }
        return 'planned'
    }

    const status = getStatus()

    return <Badge color={colors[status.toUpperCase() as keyof typeof colors]} text={status} />
}

