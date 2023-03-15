import { useTable } from "@refinedev/antd";

// It is recommended to use explicit import as seen below to reduce bundle size.
// import { IconName } from "@ant-design/icons";
import * as Icons from "@ant-design/icons";

import { Table, Space, Button } from "antd";
import { Link } from "@remix-run/react"


const RESOURCE = "dc-treatments"

export default function TreatmentTable({
    patientId
}: {
    patientId: string  
}) {
    const { tableProps, tableQueryResult } = useTable({
        resource: RESOURCE,

        meta: {
            populate: ['doctor', 'patient']
        },

        filters: {
            initial: [
                {
                    field: "patient.id",
                    operator: "eq",
                    value: patientId
                }
            ]
        }
    })
    return <Table 
        {...tableProps} rowKey="id"
        columns={[
            {
                title: "Nombre",
                render: (_, record) => <Link to={`${record.id}`}>{record.name}</Link>
            },
            {
                title: "Doctor",
                render: (_, record) => record?.doctor?.firstName + " " + record?.doctor?.lastName
            }
        ]}
    />
}