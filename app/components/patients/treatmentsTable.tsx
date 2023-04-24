import { useTable } from "@refinedev/antd";

import { Table, Space, Button } from "antd";
import { Link } from "@remix-run/react"

export default function TreatmentTable({
    patientId
}: {
    patientId: string  
}) {
    const { tableProps } = useTable({
        resource: "dc-treatments",
        meta: {
            populate: ['doctor', 'patient']
        },
        syncWithLocation: false,
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
