
import { Calendar } from 'react-big-calendar'
import { dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import type { Components } from 'react-big-calendar'
import calendarStyle from '~/styles/calendar.css'
import CalendarComponents from '~/components/calendar/CalendarComponents'

const localizer = dayjsLocalizer(dayjs)

export default function CaalendarPAge() {


    const { components }: {
        components: Components
    } = useMemo(() => ({
        components: CalendarComponents
    }), [])


    return <div>
        <Calendar
            components={components}
            localizer={localizer}
            style={{ height: "calc(100vh - 128px)" }}
            onSelectSlot={(slotInfo) => {
                console.log(slotInfo)
            }}
            selectable
        />
    </div>
}

export function links () {
    return [{ rel: 'stylesheet', href: calendarStyle }]
}
