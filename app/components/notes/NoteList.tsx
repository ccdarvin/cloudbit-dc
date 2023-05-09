import { Table } from "antd"
import { useTable } from "@refinedev/antd"
import { useEffect } from "react"
import { useSearchParams } from "@remix-run/react"
import DropdownActions from "~/components/buttons/DropdownActions"


export default function NoteList({
    patient
}: {
    patient?: string,
}) {

    const { tableQueryResult, setFilters, tableProps } = useTable({
        resource: "dc-notes",
        meta: {
            populate: ['note'],
        },
        sorters: {
            initial: [{
                field: "id",
                order: "desc"
            }]
        },
        syncWithLocation: false,
    })
    const [searchParams, setSearchParams] = useSearchParams()

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
        rowKey="id"
        columns={[
            {
                title: 'Nota',
                render: (_, record) => <div dangerouslySetInnerHTML={{ __html: record.note.html }} />
            },
            {
                title: 'Fecha',
                dataIndex: 'updatedAt',
                render: (_, record) => <span>{new Date(record.createdAt).toLocaleDateString()}</span>
            },
            {
                dataIndex: 'actions',
                render: (_, record) => <div>
                    <DropdownActions
                        resource="dc-notes"
                        recordItemId={record.id}
                        showItem={{
                            hide: false
                        }}
                        editItem={{
                            url: () =>  {
                                searchParams.set('note', record.id as string)
                                return `?${searchParams.toString()}`
                            }
                        }}
                    />
                </div>
            }
        ]}
    />
}