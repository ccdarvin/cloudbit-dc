import { Table, useEditableTable, Space, Button, Icons, Drawer, EditButton, InputNumber, Form, Input, Spin, Icon } from "@pankod/refine-antd"
import { useSearchParams } from "@remix-run/react"
import { useEffect, useState } from "react"
import { useDebounce } from "usehooks-ts"

const RESOURCE = "dc-procedures"


export default function ProceduresTable({
    onAdd,
}: {
    onAdd: (procedure: any) => void
}) {
    const [open, setOpen] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState<string>("")
    const debouncedQuery = useDebounce<string>(query, 200)

    const {
        tableProps,
        formProps,
        tableQueryResult,
        setFilters: setTableFilters,
        isEditing,
        setId: setEditId,
        saveButtonProps,
        cancelButtonProps,
        editButtonProps
    } = useEditableTable({
        resource: RESOURCE,
    })
    useEffect (() => {
        setOpen(true)
    }, [open])
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
    tableProps.loading = tableQueryResult?.isLoading
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
            searchParams.delete('action')
            setSearchParams(searchParams)
        }}
    >
        <Form {...formProps}>
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
                        render: (_, record: any) => {
                            if (isEditing(record.id)) {
                                return  <Form.Item 
                                    name="price"
                                    noStyle
                                >
                                        <InputNumber prefix="$" />
                                </Form.Item>
                            }
                            return record.price
                        }
                    },
                    {
                        dataIndex: "actions",
                        render: (_, record: any) => {
                            if (isEditing(record.id)) {
                                return <Space.Compact>
                                    <Button
                                        icon={<Icons.SaveOutlined />}
                                        type="text"
                                        loading={saveButtonProps.disabled}
                                        {...saveButtonProps} />
                                    <Button
                                        danger
                                        type="text"
                                        icon={<Icons.CloseOutlined />}
                                        {...cancelButtonProps} />
                                </Space.Compact>
                            }
                            return <Space.Compact>
                                <EditButton
                                    {...editButtonProps(record.id)}
                                    hideText
                                    size="small"
                                    type="text"
                                />
                            </Space.Compact>
                        }
                    }
                ]}
            />
        </Form>
    </Drawer>
}
