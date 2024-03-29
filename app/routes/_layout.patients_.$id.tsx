
import {Button, Card, Descriptions, Divider, Space, Tabs, Typography} from "antd"
import { Outlet,  useParams, useSearchParams } from "@remix-run/react"
import TreatmentTable from "~/components/patients/TreatmentsTable"
import { AppointmentIcon, NoteIcon, TaskIcon, TreatmentIcon } from "~/components/icons"
import { Show } from "~/components/crud/Show"
import { useShow } from "@refinedev/core"
import type { TabsProps } from 'antd'
import dayjs from "dayjs"
import NoteCreate from "~/components/notes/NoteCreate"
import NoteList from "~/components/notes/NoteList"
import AvatarField from "~/components/fields/AvatarField"
import NoteEdit from "~/components/notes/NoteEdit"




export default function EditPage() {
    const { id } = useParams()
    const { queryResult } = useShow({
        meta: {
            populate: ['avatar'],
        }
    });
    const { data, isLoading } = queryResult;
    const [searchParams, setSearchParams] = useSearchParams()

    const patient = data?.data || {}

    const tabItems: TabsProps['items'] = [
        {
            key: 'info',
            label: 'Información',
            children: <div>Información</div>
        },
        {
            key: 'treatments',
            label: 'Tratamientos',
            children: <TreatmentTable patientId={id as string} />
        },
        {
            key: 'notes',
            label: 'Notas',
            children: <NoteList patient={id as string} />
        },
    ]
    
    const handlerCreate = (type: string) => {
        searchParams.set(type, 'create')
        setSearchParams(searchParams)
    }


    const createOrEditNote = () => {
        const closeHandler = () => {
            searchParams.delete('note')
            setSearchParams(searchParams)
        }
        const successHandler = () => {
            searchParams.delete('note')
            searchParams.set('tab', 'notes')
            setSearchParams(searchParams)
        }

        if (searchParams.get('note') === 'create') {
            return <NoteCreate 
                open
                onClose={closeHandler}
                onSuccess={successHandler}
                patient={id as string} 
            />
        } else if (searchParams.get('note')) {
            return <NoteEdit 
                open
                onClose={closeHandler}
                onSuccess={successHandler}
                noteId={searchParams.get('note') as string} 
            />
        }

        return null
    }

    return <Show
        isLoading={isLoading}
        goBack={false}
    >
        <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}>
            <Card
                actions={[
                    <Typography.Text 
                        strong key="0"
                        style={{cursor: 'auto'}}
                    >
                        Crear
                    </Typography.Text>,
                    <Button type="link" key="1" icon={<TreatmentIcon />}>
                            tratamiento
                    </Button>,
                    <Button type="link" key="2" icon={<AppointmentIcon />}>
                        Cita
                    </Button>,
                    <Button type="link" key="3" icon={<TaskIcon />}>
                        Tarea
                    </Button>,
                    <Button 
                        key="4"
                        type="link" 
                        icon={<NoteIcon />}
                        onClick={() => handlerCreate('note')}
                    >
                        Nota
                    </Button>
                ]}
            >
                <Space style={{
                    display: 'flex',
                    alignItems: 'initial',
                }}>
                    <AvatarField value={patient?.avatar} size={128} />
                    <Divider type="vertical" style={{ height: '100%' }}/>
                    <Descriptions column={2}>
                        <Descriptions.Item label="Edad">
                            <Space>
                                {patient?.birthDate && dayjs().diff(dayjs(patient.birthDate), "year")} 
                                {patient?.birthDate && " años"}
                                {patient?.birthDate && dayjs(patient.birthDate).format("LL") }
                            </Space>
                        </Descriptions.Item>
                        <Descriptions.Item label="Sexo">
                            {patient?.sex === 'M' && 'Masculino'}
                            {patient?.sex === 'F' && 'Femenino'}
                        </Descriptions.Item >
                        <Descriptions.Item span={2} label="Documento de Identidad">
                            {patient?.idCardNumber}
                        </Descriptions.Item>
                        <Descriptions.Item label="Teléfono">
                            {patient?.phone}
                        </Descriptions.Item>
                        <Descriptions.Item label="Correo Electrónico">
                            {patient?.email}
                        </Descriptions.Item>
                        <Descriptions.Item span={2} label="Dirección">
                            {patient?.address}
                        </Descriptions.Item>
                    </Descriptions>
                </Space>
            </Card>
            <div>
                <Tabs
                    animated={true}
                    items={tabItems}
                    activeKey={searchParams?.get('tab') || 'info'}
                    onChange={(key) => {
                        searchParams.set('tab', key)
                        setSearchParams(searchParams)
                    }}
                />
            </div>
            <div>
                <Outlet />
            </div>
            {createOrEditNote()}
        </div>
    </Show>
}
