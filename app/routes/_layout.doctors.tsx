import { List, useTable, CreateButton } from "@refinedev/antd";

// It is recommended to use explicit import as seen below to reduce bundle size.
// import { IconName } from "@ant-design/icons";

import { Table, Tooltip } from "antd";
import { Link, Outlet} from "@remix-run/react"
import dayjs from "dayjs"
import { DropdownActions, ShowLink } from "~/components/buttons";


export default function Patients() {
    const { tableProps } = useTable({})

    return <List>
        <Table 
            {...tableProps} rowKey="id"
            columns={[
                {
                    title: "Name",
                    render: (_, record) => <ShowLink recordItemId={record.id}>
                        {record.firstName} {record.lastName}
                    </ShowLink>
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
        <Outlet />
    </List>
    
}