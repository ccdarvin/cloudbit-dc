
import { TimePicker as TimePickerAnt } from 'antd'
import dayjs from 'dayjs'

/*
 TimePiker return text with custom format
 */
export default function TimePicker({
    value,
    onChange,
    style,
    ...props
}: {
    date?: string | undefined
    value?: string | undefined
    onChange?: (value: string | undefined) => void
    style?: React.CSSProperties
}) {
    return <TimePickerAnt
        {...props}
        value={value ? dayjs(value, ['HH:mm:ss.SSS', 'HH:mm:ss', 'HH:mm']) : undefined}
        format="hh:mm a"
        onChange={(value) => onChange?.(value ? value.format('HH:mm:ss.SSS'): undefined)}
    />
}