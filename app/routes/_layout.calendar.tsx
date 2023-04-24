
import { Calendar } from 'react-big-calendar'
import { dayjsLocalizer, View } from 'react-big-calendar'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import calendarStyle from '~/styles/calendar.css'
import CalendarComponents from '~/components/calendar/CalendarComponents'
import { useSearchParams } from '@remix-run/react'
import EventCreate from '~/components/calendar/Create'
import { useTable } from '@refinedev/antd'

const localizer = dayjsLocalizer(dayjs)

export default function CalendarPage() {

    const { tableQueryResult: queryResult } = useTable({
        syncWithLocation: false
    })
    const [searchParams, setSearchParams] = useSearchParams()

    // data for create event
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [initialValues, setInitialValues] = useState({})

    const { components } = useMemo(() => ({
        components: CalendarComponents
    }), [])

    const events = useMemo(() => {
        return queryResult?.data?.data?.map((event: any) => {
            const start = dayjs(`${event.date} ${event.time}`)
            const end = start.add(event.duration, 'minute')
            return {
                id: event.id,
                title: event.title,
                start: start.toDate(),
                end: end.toDate(),
            }
        })
    }, [queryResult])

    return <div>
        <Calendar
            events={events}
            components={components}
            localizer={localizer}
            style={{ height: "calc(100vh - 128px)" }}
            defaultView={searchParams.get('view') as View || 'week'}
            onSelectSlot={(slotInfo, ...props) => {
                setIsCreateOpen(true)
                setInitialValues({
                    date: dayjs(slotInfo.start).format('YYYY-MM-DD'),
                    time: dayjs(slotInfo.start).format('HH:mm:ss.SSS'),
                    duration: dayjs(slotInfo.end).diff(dayjs(slotInfo.start), 'minute'),
                    type: 'appointment'
                })
            }}
            selectable
        />
        <EventCreate 
            open={isCreateOpen}
            onClose={() => setIsCreateOpen(false)}
            initialValues={initialValues}
        />
    </div>
}

export function links () {
    return [{ rel: 'stylesheet', href: calendarStyle }]
}
