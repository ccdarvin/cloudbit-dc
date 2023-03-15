import { List, useEditableTable, CreateButton, Title, EditButton } from "@refinedev/antd";

// It is recommended to use explicit import as seen below to reduce bundle size.
// import { IconName } from "@ant-design/icons";
import * as Icons from "@ant-design/icons";

import { Table, Space, Button, InputNumber, Form } from "antd";
import { LayoutWrapper } from "@refinedev/core";
import { Outlet } from "@remix-run/react"
import LoadButton from "~/components/procedures/LoadButton"

const RESOURCE = "dc-procedures"


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
        resource: RESOURCE,
    })

    return <LayoutWrapper>
        <List
            headerButtons={[
                <LoadButton key="load" onSuccess={tableQueryResult?.refetch}/>,
            ]}
        >
            <Form {...formProps}>
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
        </List>
        <Outlet />
    </LayoutWrapper>
}