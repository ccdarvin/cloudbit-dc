import { Tag, Tooltip } from "antd"
import { TREATMENT_STATUS } from "../constants";


export default function HeaderStatusField({
    value,
}: {
    items?: any[],
    value?: string;
    onChange?: (value: string) => void;
}) {


    const status = TREATMENT_STATUS.find(status => status.value === value)
    

    return <Tooltip title={status?.headerHelp}>
        <Tag 
            color={status?.color}
        >
            {status?.label}
        </Tag>
    </Tooltip>
}

