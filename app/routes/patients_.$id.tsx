import { Avatar, Button, Card, Col, Descriptions, Divider, EditButton, Icons, Row, Space, Spin, Tabs, Typography, useForm } from "@pankod/refine-antd"
import { Link, Outlet, useLoaderData, useParams, useSearchParams } from "@remix-run/react"
import { json, LoaderFunction } from "@remix-run/node"
import { loaderOne } from "~/utils"
import { LayoutWrapper, useOne } from "@pankod/refine-core"
import dayjs from "dayjs"
import { useEffect } from "react"
import { TreatmentIcon } from "~/components/icons"
import TreatmentTable from "~/components/patients/treatmentsTable"
import type { TabsProps } from 'antd';
const RESOURCE = "dc-patients"



const tabContent: any = {
    info: () =><></> ,
    treatments: TreatmentTable,
}


const tabItems: TabsProps['items'] = [
    {
        key: 'info',
        label: 'Información',
    },
    {
        key: 'treatments',
        label: 'Tratamientos',
    },
]



export default function EditPage() {
    const { id } = useParams()
    const { data, isRefetching }: any = useOne({
        resource: RESOURCE,
        id: id as string
    })
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {

    }, [searchParams?.get('tab')])

    const ContentTab = () => {
        const Component = tabContent[searchParams?.get('tab') || 'info']
        return <Component patientId={id} />
    }

    const patient = data?.data || {}
    return <LayoutWrapper>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }}>
            <Card
                actions={[
                    <Link to={{
                        pathname: 'editinfo',
                        search: searchParams.toString(),
                    }} key='edit'>
                        <Button type="link" key="2" icon={<Icons.EditOutlined />}>
                            Editar
                        </Button>
                    </Link>,
                    <Link to={{
                        pathname: 'treatments',
                        search: searchParams.toString(),
                    }}>
                        <Button type="link" key="2" icon={<TreatmentIcon />}>
                                Crear tratamiento
                        </Button>
                    </Link>
                ]}
            >
                <Space style={{
                    display: 'flex',
                    alignItems: 'initial',
                }}>
                    <Spin spinning={isRefetching}>
                        <Space direction="vertical" style={{minWidth: '15rem'}} align="center">
                            <Avatar size={128} icon={<Icons.UserOutlined />} />
                            <Space>
                                <Typography.Text strong>{patient?.firstName} {patient?.lastName}</Typography.Text>
                            </Space>
                        </Space>
                    </Spin>
                    <Divider type="vertical" style={{ height: '100%' }}/>
                    <Descriptions column={2}>
                        <Descriptions.Item label="Edad">
                            <div>
                                {patient?.birthDate && dayjs().diff(dayjs(patient.birthDate), "year")}
                            </div>
                            <div>
                                {patient?.birthDate && dayjs(patient.birthDate).format("LL") }
                            </div>
                        </Descriptions.Item>
                        <Descriptions.Item label="Sexo">
                            {patient?.sex && patient?.sex === 'M'? 'Masculino' : 'Femenino'}
                        </Descriptions.Item >
                        <Descriptions.Item span={2} label="Documento de Identidad">
                            {patient?.idCardNumber}
                        </Descriptions.Item>
                        <Descriptions.Item label="Teléfono">
                            {patient?.phoneNumber}
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
            <Card
                bodyStyle={{display: 'none'}}
                onTabChange={(key) => {
                    setSearchParams({
                        tab: key
                    })
                }}
                activeTabKey={searchParams?.get('tab') || 'info'}
                tabList={[
                    {
                        key: 'info',
                        tab: 'Información'
                    },
                    {
                        key: 'treatments',
                        tab: 'Tratamientos'
                    }
                ]}
                cover={ <ContentTab /> }
            />
        </div>
        <div>
            <Outlet />
        </div>
    </LayoutWrapper>
}
