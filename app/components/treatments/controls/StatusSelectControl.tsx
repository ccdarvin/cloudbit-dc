import { TREATMENT_STATUS, TREATMENT_TYPES_ENUM } from "../constants"
import { Select, Tag } from "antd"


const TagSelect = ({
    value
}: { 
    value: string,
}) => {
    const status = TREATMENT_STATUS.find(status => status.value === value)
    console.log(status, value)
    return <Tag 
        style={{ 
            marginRight: 3,
            lineHeight: '2em',
        }}
        color={status?.color}
    >
        {status?.label}
    </Tag>
}
    

export default function StatusSelectControl({
    value,
    onChange
}: {
    value?: string;
    onChange?: (value: string) => void;
}) {
    return <Select
        value={value}
        onChange={(value: any) => onChange?.(value)}
        defaultValue="planned"
        placeholder="Selecciona un estado"
        bordered={false}
        options={[
            { label: <TagSelect value={TREATMENT_TYPES_ENUM.planned} />, value: TREATMENT_TYPES_ENUM.planned },
            { label: <TagSelect value={TREATMENT_TYPES_ENUM.accepted} />, value: TREATMENT_TYPES_ENUM.accepted },
            { label: <TagSelect value={TREATMENT_TYPES_ENUM.in_progress} />, value: TREATMENT_TYPES_ENUM.in_progress },
            { label: <TagSelect value={TREATMENT_TYPES_ENUM.finished} />, value: TREATMENT_TYPES_ENUM.finished },
            { label: <TagSelect value={TREATMENT_TYPES_ENUM.canceled} />, value: TREATMENT_TYPES_ENUM.canceled },
        ]}
    />
}
