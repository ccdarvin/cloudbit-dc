
import {
    Avatar,
    Button,
    Card,
    Descriptions,
    Divider,
    Space,
    Tabs,
    Typography,
} from "antd"

import { Link, Outlet,  useParams, useSearchParams } from "@remix-run/react"
import TreatmentTable from "~/components/patients/TreatmentsTable"
import { AppointmentIcon, NoteIcon, TaskIcon, TreatmentIcon, UserIcon } from "~/components/icons"
import { Show } from "~/components/crud/Show"
import { useShow } from "@refinedev/core"
import type { TabsProps } from 'antd'
import dayjs from "dayjs"
import NoteCreate from "~/components/note/NoteCreate"
import NoteList from "~/components/note/NoteList"




export default function EditPage() {
    const { id } = useParams()
    const { queryResult } = useShow();
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
        searchParams.set('create', type)
        setSearchParams(searchParams)
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
                        <Button type="link" key="1" icon={<TreatmentIcon />}>
                                Crear tratamiento
                        </Button>,
                        <Button type="link" key="2" icon={<AppointmentIcon />}>
                            Crear cita
                        </Button>,
                        <Button type="link" key="3" icon={<TaskIcon />}>
                            Crear tarea
                        </Button>,
                        <Button 
                            key="4"
                            type="link" 
                            icon={<NoteIcon />}
                            onClick={() => handlerCreate('note')}
                        >
                            Crear nota
                        </Button>
                    ]}
                >
                    <Space style={{
                        display: 'flex',
                        alignItems: 'initial',
                    }}>
                        <Space direction="vertical" style={{minWidth: '15rem'}} align="center">
                            <Avatar size={128} icon={<UserIcon />} />
                            <Space>
                                <Typography.Text strong>{patient?.firstName} {patient?.lastName}</Typography.Text>
                            </Space>
                        </Space>
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
                        items={tabItems}
                        defaultActiveKey={searchParams?.get('tab') || 'info'}
                        onChange={(key) => {
                            setSearchParams({
                                tab: key,
                            })
                        }}
                    />
                </div>
            <div>
                <Outlet />
            </div>
            <NoteCreate 
                open={searchParams?.get('create') === 'note'} 
                patient={id as string} 
            />
        </div>
    </Show>
}
