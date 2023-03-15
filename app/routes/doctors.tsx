import { List, useTable, CreateButton } from "@refinedev/antd";

// It is recommended to use explicit import as seen below to reduce bundle size.
// import { IconName } from "@ant-design/icons";
import * as Icons from "@ant-design/icons";

import { Table, Tooltip, Space, Button } from "antd";
import { json, LoaderFunction } from "@remix-run/node"
import { LayoutWrapper } from "@refinedev/core";
import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { loaderList } from "~/utils"
import dayjs from "dayjs"

const RESOURCE = "dc-doctors"

export const loader: LoaderFunction = async ({ request }) => {
    const data = await loaderList({
        resource: RESOURCE,
        request,
    })
    return json(data)
}

export default function Patients() {
    const { initialData } = useLoaderData()
    const { tableProps, tableQueryResult } = useTable({
        resource: RESOURCE,

        queryOptions: {
            initialData,
        }
    })
    tableProps.loading = tableQueryResult.isRefetching || tableQueryResult.isLoading
    return (
        <LayoutWrapper>
            <List
                headerButtons={[
                    <CreateButton key="create" resource={RESOURCE}/>,
                    <Button key="refresh"
                        loading={tableProps.loading}
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
                            title: "Name",
                            render: (_, record) => <>
                                {record.firstName} {record.lastName}
                            </>
                        },
                        {
                            title: "Correo electrónico",
                            dataIndex: "email",
                        },
                        {
                            title: "Teléfono",
                            dataIndex: "phone",
                        },
                        {
                            title: "edad",
                            dataIndex: "birthDate",
                            render: (_, record) => {
                                if (!record.birthDate) return '-'
                                const birthDate = dayjs(record.birthDate);
                                const today = dayjs();
                                const age = today.diff(birthDate, "year");
                                return  <Tooltip title={birthDate.format("LL")}><span>{age}</span></Tooltip>
                            }
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