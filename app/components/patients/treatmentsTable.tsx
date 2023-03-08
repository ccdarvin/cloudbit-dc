import { Table, useTable, Space, Button, Icons } from "@pankod/refine-antd"
import { Link } from "@remix-run/react"


const RESOURCE = "dc-treatments"

export default function TreatmentTable({
    patientId
}: {
    patientId: string  
}) {
    const { tableProps, tableQueryResult } = useTable({
        resource: RESOURCE,
        metaData: {
            populate: ['doctor', 'patient']
        },
        initialFilter: [
            {
                field: "patient.id",
                operator: "eq",
                value: patientId
            }
        ]
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