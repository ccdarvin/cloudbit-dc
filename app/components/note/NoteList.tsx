import { Table } from "antd"
import { useTable } from "@refinedev/antd"
import { useEffect } from "react"


export default function NoteList({
    patient
}: {
    patient?: string,
}) {

    const { tableQueryResult, setFilters, tableProps } = useTable({
        resource: "dc-notes",
        meta: {
            populate: ['note']
        },
        syncWithLocation: false,
    })

    useEffect(() => {
        if (patient) {
            setFilters([{
                field: "patient[id]",
                operator: "eq",
                value: patient
            }])
        }
    }, [patient])

    return <Table
        {...tableProps}
        dataSource={tableQueryResult.data?.data}
        key="id"
        columns={[
            {
                title: 'Nota',
                render: (_, record) => <div dangerouslySetInnerHTML={{ __html: record.note.html }} />
            }
        ]}
    />
}