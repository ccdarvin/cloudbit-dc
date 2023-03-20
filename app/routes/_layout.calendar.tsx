
import { Calendar } from 'react-big-calendar'
import { dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import { useMemo } from 'react'
import Toolbar from '~/components/calendar/Toolbar'
import type { Components } from 'react-big-calendar'
import calendarStyle from '~/styles/calendar.css'
import { Typography } from 'antd'



dayjs.extend(timezone)

dayjs.extend(timezone)
const localizer = dayjsLocalizer(dayjs)

export default function CaalendarPAge() {

    const { components }: {
        components: Components
    } = useMemo(() => ({
        components: {
            toolbar: Toolbar,
            month: {
                dateHeader: ({ label }) => <Typography.Text>{label}</Typography.Text>,
            },
        }
    }), [])

    return <div>
        <Calendar
            components={components}
            localizer={localizer}
            startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
        />
    </div>
}

export function links () {
    return [{ rel: 'stylesheet', href: calendarStyle }]
}
