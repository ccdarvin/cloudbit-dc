import { Avatar, Button, Card, Col, Descriptions, Divider, EditButton, Icons, Row, Space, Typography, useForm } from "@pankod/refine-antd"
import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react"
import { json, LoaderFunction } from "@remix-run/node"
import { loaderOne } from "~/utils"
import { LayoutWrapper, useOne } from "@pankod/refine-core"
import dayjs from "dayjs"

const RESOURCE = "dc-patients"


export const loader: LoaderFunction = async ({ request, params }) => {
    const data = await loaderOne({
        resource: RESOURCE,
        request,
        id: params.id,
    })
    return json(data)
}


export default function EditPage() {
    const { id } = useParams()
    const { initialData } = useLoaderData()
    const { data }: any = useOne({
        resource: RESOURCE,
        id: id as string,
        queryOptions: {
            initialData
        }
    })
    const patient = data?.data || {}
    return <LayoutWrapper>
        <Card
            actions={[
                <Button type="link" key="2" icon={<Icons.EditOutlined />}>
                    <Link to="editinfo">Editar</Link>
                </Button>,
            ]}
        >
            <Space style={{
                display: 'flex',
                alignItems: 'initial',
            }}>
                <Space direction="vertical" style={{minWidth: '15rem'}} align="center">
                    <Avatar size={128} icon={<Icons.UserOutlined />} />
                    <Space>
                        <Typography.Text strong>{patient?.firstName} {patient?.lastName}</Typography.Text>
                    </Space>
                </Space>
                <Divider type="vertical" style={{ height: '100%' }}/>
                <Descriptions column={2}>
                    <Descriptions.Item label="Edad">
                        <div>
                            {data?.birthDate && dayjs().diff(dayjs(data.birthDate), "year")}
                        </div>
                        <div>
                            {data?.birthDate && dayjs(data.birthDate).format("LL") }
                        </div>
                    </Descriptions.Item>
                    <Descriptions.Item label="Sexo">
                        {data.sex && data.sex === 'M'? 'Masculino' : 'Femenino'}
                    </Descriptions.Item >
                    <Descriptions.Item span={2} label="Documento de Identidad">
                        {data?.idCardNumber}
                    </Descriptions.Item>
                    <Descriptions.Item label="Teléfono">
                        {data?.phoneNumber}
                    </Descriptions.Item>
                    <Descriptions.Item label="Correo Electrónico">
                        {data?.email}
                    </Descriptions.Item>
                    <Descriptions.Item span={2} label="Dirección">
                        {data?.address}
                    </Descriptions.Item>
                </Descriptions>
            </Space>
        </Card>
        <div>
            <Outlet />
        </div>
    </LayoutWrapper>
}
