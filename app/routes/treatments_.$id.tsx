import { Button, Card, Descriptions, Icons, Space, Form, Table, useForm, Input, InputNumber } from "@pankod/refine-antd"
import { Link, Outlet, useLoaderData, useParams, useSearchParams } from "@remix-run/react"
import { loaderOne } from "~/utils"
import { LayoutWrapper, useOne } from "@pankod/refine-core"
import dayjs from "dayjs"
import { CreateIcon } from "~/components/icons"
import ProceduresTable from "~/components/treatments/ProceduresList"
import { useEffect, useState } from "react"

const RESOURCE = "dc-treatments"

export default function EditPage() {
    const { id } = useParams<{ id: string }>()

    const { formProps, saveButtonProps, queryResult } = useForm({
        action: "edit",
        resource: RESOURCE,
        id,
        redirect: "show",
        metaData: {
            populate: ['doctor', 'patient', 'items']
        }
    })

    const treatment = queryResult?.data?.data
    const [searchParams, setSearchParams] = useSearchParams()
    // watch items
    const items = Form.useWatch('items', formProps.form)

    return <LayoutWrapper>
        <div style={{
            
        }}>
            <Form {...formProps} 
                layout="vertical"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            >
                <Card>
                    <Descriptions 
                    title={<Form.Item noStyle name={['name']}>
                        <Input />
                    </Form.Item>} 
                    extra={
                        <Space >
                            <Button key="2" icon={<Icons.EditOutlined />}>
                                <Link to="edit">Editar</Link>
                            </Button>
                            <Button key="refresh"
                                loading={queryResult?.isRefetching}
                                icon={<Icons.Loading3QuartersOutlined />}
                                onClick={() => queryResult?.refetch()}
                            >
                                Refrescar
                            </Button>
                        </Space>
                    }>
                        <Descriptions.Item label="Doctor">{treatment?.doctor?.firstName} {treatment?.doctor?.lastName}</Descriptions.Item>
                        <Descriptions.Item label="Paciente">{treatment?.patient?.firstName} {treatment?.patient?.lastName}</Descriptions.Item>
                    </Descriptions>
                </Card>
                <Form.List
                    name="items"
                >
                    {(fields, { add, remove }) => (
                        <Card
                            bodyStyle={{ display: 'none'}}
                            cover={ <>
                                {searchParams.get('action') === 'add-procedure' && <ProceduresTable onAdd={(procedure: any) => { 
                                    add({
                                        code: procedure.code,
                                        name: procedure.name,
                                        quantity: 1,
                                        price: procedure.price,
                                        discount: 0,
                                        total: procedure.price,
                                        procedure: procedure.id,
                                    })
                                }} />}
                                <Table
                                    size="small"
                                    dataSource={items?.map((item: any, index: number) => ({key: index, ...item}) )}
                                    pagination={false}
                                    summary={() => {
                                        const total = items?.reduce((acc: number, item: any) => acc + item.total, 0)
                                        return <Table.Summary.Row>
                                            <Table.Summary.Cell index={0} colSpan={3} />
                                            <Table.Summary.Cell index={1}>Total</Table.Summary.Cell>
                                            <Table.Summary.Cell index={2}>
                                                {total}
                                            </Table.Summary.Cell>
                                        </Table.Summary.Row>
                                    }}
                                    columns={[
                                        {
                                            title: 'Código',
                                            dataIndex: 'code',
                                            rowScope: 'row',
                                            fixed: 'left',
                                        },
                                        {
                                            title: 'Nombre',
                                            dataIndex: 'name',
                                            render: (_, record: any, index: number) => <Form.Item
                                                noStyle
                                                name={[index, 'name']}
                                            >
                                                <Input.TextArea autoSize />
                                            </Form.Item>,
                                        },
                                        {
                                            title: 'Cantidad',
                                            dataIndex: 'quantity',
                                            render: (_, record: any, index: number) => <Form.Item
                                                noStyle
                                                name={[index, 'quantity']}
                                            >
                                                <InputNumber 
                                                    placeholder="0"
                                                    onChange={(value) => {
                                                        formProps.form?.setFieldValue(['items', index, 'total'], value as number * record.price)
                                                    }}
                                                />
                                            </Form.Item>
                                        },
                                        {
                                            title: 'Precio / Descuento / Precio final',
                                            dataIndex: 'price',
                                            render: (_, record: any, index: number) => <Space.Compact>
                                                <Form.Item noStyle name={[index, 'priceBase']}>
                                                    <InputNumber 
                                                        prefix="$" 
                                                        placeholder="0.00"
                                                        precision={2}
                                                        onChange={(value) => {
                                                            //  cal price with two decimals
                                                            const price = Math.round((value as number * record.quantity) * 100) / 100
                                                            formProps.form?.setFieldValue(['items', index, 'price'], price)
                                                            // set total
                                                            const quantity = formProps.form?.getFieldValue(['items', index, 'quantity'])
                                                            formProps.form?.setFieldValue(['items', index, 'total'], quantity as number * price)
                                                        }}
                                                    />
                                                </Form.Item>
                                                <Form.Item noStyle name={[index, 'discount']}>
                                                    <InputNumber 
                                                        prefix="%"
                                                        placeholder="0.00"
                                                        style={{ 
                                                            borderRadius: 0,
                                                            marginLeft: -3.5,
                                                        }}
                                                        onChange={(value) => {
                                                            // cal price with two decimals
                                                            const price = Math.round((record.priceBase * record.quantity * (100 - (value as number)) / 100) * 100) / 100
                                                            formProps.form?.setFieldValue(['items', index, 'price'], price)
                                                            // set total
                                                            const quantity = formProps.form?.getFieldValue(['items', index, 'quantity'])
                                                            formProps.form?.setFieldValue(['items', index, 'total'], quantity as number * price)
                                                        }}
                                                    />
                                                </Form.Item>
                                                <Form.Item noStyle name={[index, 'price']}>
                                                    <InputNumber 
                                                        prefix="$"
                                                        placeholder="0.00"
                                                        style={{
                                                            borderTopLeftRadius: 0,
                                                            borderBottomLeftRadius: 0,
                                                        }}
                                                        onChange={(value: any) => {
                                                            // cal discount with two decimals
                                                            const discount = Math.round((100 - (value as number * 100 / record.priceBase)) * 100) / 100
                                                            formProps.form?.setFieldValue(['items', index, 'discount'], discount)
                                                            // set total
                                                            const quantity = formProps.form?.getFieldValue(['items', index, 'quantity'])
                                                            formProps.form?.setFieldValue(['items', index, 'total'], quantity as number * value as number)
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Space.Compact>
                                        },
                                        {
                                            title: 'Total',
                                            dataIndex: 'total',
                                            render: (_, record: any, index: number) => <Form.Item
                                                noStyle
                                                name={[index, 'total']}
                                            >
                                                <InputNumber
                                                    disabled
                                                    prefix="$"
                                                    placeholder="0.00"
                                                />
                                            </Form.Item>,
                                            fixed: 'right',
                                        },
                                    ]}
                                    footer={() => <Button key="1" type="dashed" block icon={<CreateIcon />} onClick={() => {
                                        setSearchParams({ action: 'add-procedure' })
                                    }}>
                                        Agregar procedimiento
                                    </Button>}
                                />
                            </>}
                        />
                    )}
                </Form.List>
            </Form>
        </div>
    </LayoutWrapper>
}
