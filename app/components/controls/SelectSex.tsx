import { Select } from "antd"




export default function SelectSex ({
    value, 
    onChange,
}: {
    value?: string,
    onChange?: (value: string) => void
}) {
    return <Select
        value={value}
        onChange={onChange}
        style={{ width: '100%' }}
        options={[
            { label: 'Masculino', value: 'M' },
            { label: 'Femenino', value: 'F' },
        ]}
    />
}