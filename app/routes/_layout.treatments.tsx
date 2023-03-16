import { List, useTable, } from "@refinedev/antd";

import { Table } from "antd"
import { DropdownActions, ShowLink } from "~/components/buttons";


export default function Page() {
    const { tableProps } = useTable({
        meta: {
            populate: ['doctor', 'patient']
        }
    })
    return <List>
        <Table 
            {...tableProps} rowKey="id"
            columns={[
                {
                    title: "Nombre",
                    render: (_, record) => <ShowLink recordItemId={record?.id}>{record.name}</ShowLink>
                },
                {
                    title: "Paciente",
                    render: (_, record) => record?.patient?.firstName + " " + record?.patient?.lastName
                },
                {
                    title: "Doctor",
                    render: (_, record) => {
                        if (record?.doctor) {
                            return record?.doctor?.firstName + " " + record?.doctor?.lastName
                        }
                        return "No asignado"
                    }
                },
                {
                    dataIndex: "actions",
                    render: (_, record) => <DropdownActions recordItemId={record?.id} />
                }
            ]}
        />
    </List>
}