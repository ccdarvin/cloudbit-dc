import { DatePicker as DatePickerAnt } from "antd"
import type { DatePickerProps } from "antd"
import dayjs from "dayjs"



export default function DatePicker({
    value,
    onChange,
    style,
    ...props
}: {
    value?: string | undefined
    onChange?: (value: string | undefined) => void
    style?: React.CSSProperties
}) {
    return <DatePickerAnt
        {...props}
        showTime={false} 
        value={value ? dayjs(value) : undefined}
        format="dddd, DD MMMM YYYY"
        onChange={(value) => onChange?.(value ? value.format('YYYY-MM-DD') : undefined)}
    />
}