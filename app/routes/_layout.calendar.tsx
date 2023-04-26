
import CalendarComponents from '~/components/calendar/CalendarComponents'
import { dayjsLocalizer, View } from 'react-big-calendar'
import EventCreate from '~/components/calendar/Create'
import { useSearchParams } from '@remix-run/react'
import calendarStyle from '~/styles/calendar.css'
import { Calendar } from 'react-big-calendar'
import { useTable } from '@refinedev/antd'
import { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { useStylesCalendar } from '~/components/calendar/styles'
import { AppointmentIcon, ReminderIcon, TaskIcon } from '~/components/icons'
import { Space } from 'antd'


const localizer = dayjsLocalizer(dayjs)

const resourceMap = [
    { resourceId: 'appt', resourceTitle: <Space><AppointmentIcon />Citas</Space>},
    { resourceId: 'task', resourceTitle: <Space><TaskIcon />Tareas</Space> },
    { resourceId: 'rem', resourceTitle: <Space><ReminderIcon />Recordatorios</Space> },
]

export default function CalendarPage() {

    const { tableQueryResult: queryResult } = useTable({
        syncWithLocation: false
    })
    const [searchParams, setSearchParams] = useSearchParams()
    const { styles, cx } = useStylesCalendar()

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
            let icon = <AppointmentIcon />
            if (event.type === 'task') {
                icon = <TaskIcon />
            } else if (event.type === 'rem') {
                icon = <ReminderIcon />
            }

            return {
                id: event.id,
                title: event.title,
                start: start.toDate(),
                end: end.toDate(),
                resourceId: !!event.type? event.type : 'appt',
                icon,
                data: event
            }
        })
    }, [queryResult])

    return <div>
        <Calendar
            className={cx(styles.calendar)}
            events={events}
            components={components}
            localizer={localizer}
            style={{ height: "calc(100vh - 128px)" }}
            defaultView={searchParams.get('view') as View || 'week'}
            onSelectSlot={(slotInfo, ...props) => {
                setIsCreateOpen(true)
                console.log(slotInfo)
                setInitialValues({
                    date: dayjs(slotInfo.start).format('YYYY-MM-DD'),
                    time: dayjs(slotInfo.start).format('HH:mm:ss.SSS'),
                    duration: dayjs(slotInfo.end).diff(dayjs(slotInfo.start), 'minute'),
                    type: !!slotInfo.resourceId? slotInfo.resourceId : 'appt',
                })
            }}
            resourceIdAccessor="resourceId"
            resources={resourceMap}
            resourceTitleAccessor="resourceTitle"
            selectable
            popup={false}
        />
        {isCreateOpen &&
            <EventCreate 
                open={isCreateOpen}
                onClose={() => setIsCreateOpen(false)}
                initialValues={initialValues}
            />
        }
    </div>
}

export function links () {
    return [{ rel: 'stylesheet', href: calendarStyle }]
}


