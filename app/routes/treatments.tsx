import { List, useTable, CreateButton, Title } from "@refinedev/antd";

// It is recommended to use explicit import as seen below to reduce bundle size.
// import { IconName } from "@ant-design/icons";
import * as Icons from "@ant-design/icons";

import { Table, Space, Button } from "antd";
import { LayoutWrapper } from "@refinedev/core";
import { Link, Outlet } from "@remix-run/react"


const RESOURCE = "dc-treatments"

export default function Page() {
    const { tableProps, tableQueryResult } = useTable({
        resource: RESOURCE,

        meta: {
            populate: ['doctor', 'patient']
        }
    })
    return (
        <LayoutWrapper>
            <List
                headerButtons={[
                    <CreateButton key="create" resource={RESOURCE}/>,
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
    );
}