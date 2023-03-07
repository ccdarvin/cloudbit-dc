import { List, Table, useTable, Tooltip, Space, Button, Icons, CreateButton, Dropdown } from "@pankod/refine-antd";
import { json, LoaderFunction } from "@remix-run/node"
import { LayoutWrapper } from "@pankod/refine-core"
import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { loaderList } from "~/utils"
import dayjs from "dayjs"

const RESOURCE = "dc-patients"

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
    return <LayoutWrapper>
        <List
            headerButtons={[
                <CreateButton key="create" resourceNameOrRouteName={RESOURCE} />,
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
                        title: "Name",
                        render: (_, record) => <Link to={`/patients/${record.id}`}>
                            {record.firstName} {record.lastName}
                        </Link>
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
                            <Dropdown
                                menu={{
                                    items: [
                                        {
                                            key: "view",
                                            label: <Link to={`/patients/${record.id}`}>Ver</Link>,
                                            icon: <Icons.EyeOutlined />,
                                        },
                                        {
                                            key: "edit",
                                            label: <Link to={`/patients/${record.id}/edit`}>Editar</Link>,
                                            icon: <Icons.EditOutlined />,
                                        },
                                        {
                                            key: "delete",
                                            label: <Link to={`/patients/${record.id}/delete`}>Eliminar</Link>,
                                            icon: <Icons.DeleteOutlined />,
                                            danger: true,
                                        }
                                    ]
                                }}   
                            >
                                <Button type="link" size="large" icon={<Icons.MoreOutlined />} />
                            </Dropdown>
                        </Space>
                    }
                ]}
            />
        </List>
        <Outlet />
    </LayoutWrapper>
}