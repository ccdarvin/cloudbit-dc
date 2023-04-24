import { Table, Space, Button, InputNumber, Form } from "antd"
import LoadButton from "~/components/procedures/LoadButton"
import { CloseIcon, EditIcon } from "~/components/icons"
import { List, useEditableTable } from "@refinedev/antd"
import SaveButton from "~/components/buttons/SaveButton"


export default function Page() {
    const {
        tableProps,
        formProps,
        tableQueryResult,    
        isEditing,
        setId: setEditId,
        saveButtonProps,
        cancelButtonProps,
        editButtonProps
    } = useEditableTable({
        syncWithLocation: true,
    })

    return <List
        headerButtons={[
            <LoadButton key="load" onSuccess={tableQueryResult?.refetch}/>,
        ]}
    >
        <Form {...formProps} disabled={saveButtonProps.disabled} >
            <Table 
                {...tableProps} rowKey="id"
                columns={[
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
                                    <SaveButton
                                        hideText
                                        type="link"
                                        {...saveButtonProps} />
                                    <Button
                                        danger
                                        type="link"
                                        icon={<CloseIcon />}
                                        {...cancelButtonProps} />
                                </Space.Compact>
                            }
                            return <Space.Compact>
                                <Button
                                    {...editButtonProps(record.id)}
                                    icon={<EditIcon />}
                                    type="link"
                                />
                            </Space.Compact>
                        }
                    }
                ]}
            />
        </Form>
    </List>
}
