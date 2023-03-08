import { List, Table, useTable, Space, Button, Icons, CreateButton, Title } from "@pankod/refine-antd"
import { LayoutWrapper } from "@pankod/refine-core"
import { Link, Outlet } from "@remix-run/react"


const RESOURCE = "dc-treatments"

export default function Page() {
    const { tableProps, tableQueryResult } = useTable({
        resource: RESOURCE,
        metaData: {
            populate: ['doctor', 'patient']
        }
    })
    return <LayoutWrapper>
        <List
            headerButtons={[
                <CreateButton key="create" resourceNameOrRouteName={RESOURCE}/>,
                <Button key="refresh"
                    loading={tableQueryResult.isRefetching}
                    icon={<Icons.Loading3QuartersOutlined />}
                    onClick={() => tableQueryResult.refetch()}
                >
                    Refrescar
                </Button>
            ]}
        >
            <Table 
                {...tableProps} rowKey="id"
                columns={[
                    {
                        title: "Nombre",
                        render: (_, record) => <Link to={`${record.id}`}>{record.name}</Link>
                    },
                    {
                        title: "Paciente",
                        render: (_, record) => record?.patient?.firstName + " " + record?.patient?.lastName
                    },
                    {
                        title: "Doctor",
                        render: (_, record) => record?.doctor?.firstName + " " + record?.doctor?.lastName
                    },
                    {
                        dataIndex: "actions",
                        render: (_, record) => <Space>
                            <Link to={`${record.id}/edit`}>
                                <Button type="link" size="small" icon={<Icons.EditOutlined />} />
                            </Link>
                        </Space>
                    }
                ]}
            />
        </List>
        <Outlet />
    </LayoutWrapper>
}