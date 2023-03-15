import { List, useTable } from "@refinedev/antd";
import { Table, Tooltip, Space, Button, Dropdown } from "antd";
import { json, LoaderFunction } from "@remix-run/node"
import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { loaderList } from "~/utils"
import dayjs from "dayjs"
import { CreateButton } from "~/components/buttons/create";
import { RefreshButton } from "~/components/buttons/refresh";
import { DropdownActions } from "~/components/buttons/dropdownActions";

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
    return <div>
        <List
            headerButtons={[
                <CreateButton key="create" />,
                <RefreshButton key="refresh" />,
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
                        render: (_, record) => <DropdownActions recordItemId={record.id} />
                    }
                ]}
            />
        </List>
        <Outlet />
    </div>
}