import { Avatar, Button, Card, Col, Descriptions, Divider, EditButton, Icons, Row, Space, Spin, Table, Typography, useForm } from "@pankod/refine-antd"
import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react"
import { json, LoaderFunction } from "@remix-run/node"
import { loaderOne } from "~/utils"
import { LayoutWrapper, useOne } from "@pankod/refine-core"
import dayjs from "dayjs"
import { CreateIcon } from "~/components/icons"

const RESOURCE = "dc-treatments"


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
    const { data, isRefetching, refetch } = useOne({
        resource: RESOURCE,
        id: id as string,
        queryOptions: {
            initialData
        },
        metaData: {
            populate: ['doctor', 'patient'] 
        }
    })
    const treatment = data?.data || {}
    return <LayoutWrapper>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }}>
        <Card>
            <Descriptions title={treatment?.name} extra={
                <Space >
                    <Button key="2" icon={<Icons.EditOutlined />}>
                        <Link to="edit">Editar</Link>
                    </Button>
                    <Button key="refresh"
                        loading={isRefetching}
                        icon={<Icons.Loading3QuartersOutlined />}
                        onClick={() => refetch()}
                    >
                        Refrescar
                    </Button>
                </Space>
            }>
                <Descriptions.Item label="Doctor">{treatment?.doctor?.firstName} {treatment?.doctor?.lastName}</Descriptions.Item>
                <Descriptions.Item label="Paciente">{treatment?.patient?.firstName} {treatment?.patient?.lastName}</Descriptions.Item>
            </Descriptions>
        </Card>
        <Card
            bodyStyle={{ display: 'none'}}
            cover={ <Table
                columns={[
                    {
                        title: 'Código',
                        dataIndex: 'code',
                    },
                    {
                        title: 'Nombre',
                        dataIndex: 'name',
                    },
                    {
                        title: 'Cantidad',
                        dataIndex: 'quantity',
                    },
                    {
                        title: 'Precio',
                        dataIndex: 'price',
                    },
                    {
                        title: 'Total',
                        dataIndex: 'total',
                    },
                ]}
            />}
            actions={[
                <Button key="1" type="text" icon={<CreateIcon />}>
                    <Link to="">Agregar procedimiento</Link>
                </Button>,
            ]}
        />
        </div>
        <div>
            <Outlet />
        </div>
    </LayoutWrapper>
}
