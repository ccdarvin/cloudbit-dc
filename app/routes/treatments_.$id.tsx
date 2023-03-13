import { Button, Card, Descriptions, Icons, Space, Form, Table, useForm } from "@pankod/refine-antd"
import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react"
import { loaderOne } from "~/utils"
import { LayoutWrapper, useOne } from "@pankod/refine-core"
import dayjs from "dayjs"
import { CreateIcon } from "~/components/icons"

const RESOURCE = "dc-treatments"

export default function EditPage() {
    const { id } = useParams<{ id: string }>()
    const { formProps, saveButtonProps, queryResult } = useForm({
        action: "edit",
        resource: RESOURCE,
        id,
        redirect: "show",
        metaData: {
            populate: ['doctor', 'patient']
        }
    })

    const treatment = queryResult?.data?.data

    return <LayoutWrapper>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }}>
            <Form {...formProps} layout="vertical">

                <Card>
                    <Descriptions title={treatment?.name} extra={
                        <Space >
                            <Button key="2" icon={<Icons.EditOutlined />}>
                                <Link to="edit">Editar</Link>
                            </Button>
                            <Button key="refresh"
                                loading={queryResult?.isRefetching}
                                icon={<Icons.Loading3QuartersOutlined />}
                                onClick={() => queryResult?.refetch()}
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
                            <Link to="items">Agregar procedimiento</Link>
                        </Button>,
                    ]}
                />
            </Form>
        </div>
        <div>
            <Outlet context={{

            }} />
        </div>
    </LayoutWrapper>
}
