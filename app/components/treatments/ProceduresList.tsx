import { useTable } from "@refinedev/antd";
import * as Icons from "@ant-design/icons";
import { Table, Button, Drawer, Input, Spin } from "antd";
import { useSearchParams } from "@remix-run/react"
import { useEffect, useState } from "react"
import { useDebounce } from "usehooks-ts"

const RESOURCE = "dc-procedures"


export default function ProceduresTable({
    onAdd,
    open,
    onClose
}: {
    onAdd: (procedure: any) => void,
    open: boolean,
    onClose: () => void
}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState<string>("")
    const debouncedQuery = useDebounce<string>(query, 200)

    const {
        tableProps,
        tableQueryResult,
        setFilters: setTableFilters,
    } = useTable({
        resource: RESOURCE,
        syncWithLocation: false
    })
    useEffect(() => {
        setTableFilters([
            {
                operator: "or",
                value: [
                    {
                        field: "name",
                        operator: "contains",
                        value: query
                    },
                    {
                        field: "code",
                        operator: "startswith",
                        value: query
                    }
                ]
            }
        ])
    }, [debouncedQuery])
    
    return <Drawer 
        open={open}
        size="large"
        title={
            <Input
                size="large"
                value={query}
                suffix={
                    tableQueryResult?.isLoading || tableQueryResult?.isRefetching ? <Spin indicator={<Icons.LoadingOutlined  />} /> :
                <Icons.SearchOutlined />
                }
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
                placeholder="Buscar procedimiento..."
            />
        }
        mask={false}
        onClose={() => {
            onClose()
        }}
    >
        <Table 
            {...tableProps} rowKey="id"
            columns={[
                {
                    render: (_, record: any) => {
                        return <Button
                            icon={<Icons.PlusOutlined />}
                            type="text"
                            onClick={() => {
                                onAdd(record)
                            }}
                        >
                            Agregar
                        </Button>
                    }
                },
                {
                    title: "Código",
                    dataIndex: "code",
                },
                {
                    title: "Nombre",
                    dataIndex: "name",
                },
                {
                    title: "Categoría",
                    dataIndex: "category",
                },
                {
                    title: "Precio",
                    dataIndex: "price",
                    render: (_, record: any) => `$ ${record.price}`
                },
            ]}
        />
    </Drawer>
}
