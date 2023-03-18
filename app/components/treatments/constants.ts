



export const TREATMENT_TYPES_ENUM = {
    planned: 'planned',
    accepted: 'accepted',
    in_progress: 'in_progress',
    finished: 'finished',
    canceled: 'canceled'
}


/*
    * This is a list of all the possible values for the treatment status
    * hekp is an optional field that can be used to show a tooltip with more information in header status
    *
*/
export const TREATMENT_STATUS:Array<{
    value: string,
    label: string,
    color: string,
    headerHelp?: string
}> = [
    { 
        value: TREATMENT_TYPES_ENUM.planned, 
        label: 'Planeado', 
        color: 'blue',
        headerHelp: 'El tratamiento está planeado, a la espera de ser aceptado por el paciente'
    },
    { 
        value: TREATMENT_TYPES_ENUM.accepted, 
        label: 'Aceptado', 
        color: 'green' ,
        headerHelp: 'Algunos de los procedimientos del tratamiento han sido aceptados'
    },
    { 
        value: TREATMENT_TYPES_ENUM.in_progress, 
        label: 'En progreso', 
        color: 'orange',
        headerHelp: 'Algunos de los procedimientos del tratamiento están en progreso'
     },
    { 
        value: TREATMENT_TYPES_ENUM.finished, 
        label: 'Finalizado', 
        color: 'red',
        headerHelp: 'Todos los procedimientos del tratamiento han sido finalizados'
    },
    { 
        value: TREATMENT_TYPES_ENUM.canceled, 
        label: 'Cancelado', 
        color: 'gray',
        headerHelp: 'Todos los procedimientos del tratamiento han sido cancelados'
    }
]
