import { Space } from "antd";
import { AppointmentIcon, ReminderIcon, TaskIcon } from "../icons";




export const RESOURCE = [
    { 
        id: 'appt', 
        title: <Space><AppointmentIcon />Citas</Space>,
        icon: <AppointmentIcon />
    },
    { 
        id: 'task', 
        title: <Space><TaskIcon />Tareas</Space>,
        icon: <TaskIcon />
    },
    { 
        id: 'rem', 
        title: <Space><ReminderIcon />Recordatorios</Space>,
        icon: <ReminderIcon /> 
    },
]


