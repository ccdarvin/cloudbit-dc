
import { Form, Input, Card, Space, Select, Row, Col, DatePicker, InputNumber, Button } from "antd"
import HeaderStatusControl from "./controls/HeaderStatusControl"
import ProceduresTable from "./ProceduresList"
import { useSelect } from "@refinedev/antd"
import { CreateIcon } from "../icons"
import ItemsTable from "./ItemsTable"
import { useState } from "react"
import dayjs from "dayjs"
import StatusSelectControl from "./controls/StatusSelectControl"


export default function TreatmentForm({ 
    formProps
} : {
    formProps: any
}) {
    const { selectProps: patientsSelectProps, queryResult: patientsQueryResult } = useSelect({
        resource: "dc-patients",
        pagination: {
            mode: "server"
        }
    })
    const { selectProps: doctorsSelectProps, queryResult: doctorsQueryResult } = useSelect({
        resource: "dc-doctors",
        pagination: {
            mode: "server"
        }
    })

    const [addProcedureOpen, setAddProcedureOpen] = useState(false)
    const items = Form.useWatch('items', formProps.form)
    return <Form 
        {...formProps} 
        layout="vertical"
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }}
    >
        <Row gutter={16}>
            <Col span={16}>
                <Card
                    bordered={false}
                >
                    <Form.Item
                        label="Nombre"
                        rules={[{ required: true, message: 'Por favor ingrese el nombre del tratamiento' }]}
                        name={['name']}
                    >
                        <Input />
                    </Form.Item>
                    <Space.Compact block>
                        <Form.Item
                            style={{ flex: '-0 1 50%' }}
                            label="Doctor"
                            rules={[{ required: true, message: 'Por favor seleccione un doctor' }]} 
                            name={['doctor', 'id']}>
                            <Select
                                placeholder="Selecione um doctor"
                                {...doctorsSelectProps}
                                options={doctorsQueryResult?.data?.data?.map((doctor: any) => ({
                                    label: doctor.firstName + " " + doctor.lastName,
                                    value: doctor.id,
                                }))}
                        /> 
                        </Form.Item>
                        <Form.Item
                            style={{ flex: '-0 1 50%' }}
                            label="Paciente"
                            rules={[{ required: true, message: 'Por favor seleccione un paciente' }]}
                            name={['patient', 'id']}
                        >
                            <Select 
                                placeholder="Selecione um paciente"
                                {...patientsSelectProps}
                                options={patientsQueryResult?.data?.data?.map((patient: any) => ({
                                    label: patient.firstName + " " + patient.lastName,
                                    value: patient.id,
                                }))}
                            />
                        </Form.Item>
                    </Space.Compact>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    bordered={false}
                >   
                    <Form.Item label="Estado" name={['status']}>
                        <HeaderStatusControl items={items} />
                    </Form.Item>
                    <Space.Compact block>
                        <Form.Item 
                            label="Fecha de inicio" 
                            name={['startDate']}
                            style={{ flex: '-0 1 50%' }}
                            getValueProps={(value) => ({
                                value: value ? dayjs(value) : undefined
                            })}
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item 
                            label="Fecha de finalización" 
                            name={['endDate']}
                            style={{ flex: '-0 1 50%' }}
                            getValueProps={(value) => ({
                                value: value ? dayjs(value) : undefined
                            })}
                        >
                            <DatePicker />
                        </Form.Item>
                    </Space.Compact>
                </Card>
            </Col>
        </Row>
        <Form.List
            name="items"
        >
            {(fields, { add, remove }) => <>
                <ProceduresTable 
                    open={addProcedureOpen} 
                    onClose={() => setAddProcedureOpen(false)}
                    onAdd={(procedure: any) => { 
                    add({
                        code: procedure.code,
                        name: procedure.name,
                        quantity: 1,
                        priceBase: procedure.price,
                        price: procedure.price,
                        discount: 0,
                        total: procedure.price,
                        procedure: procedure.id,
                    })
                }} />
                <ItemsTable
                    dataSource={items}
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
                            title: 'Estado',
                            dataIndex: 'status',
                            render: (_, record: any, index: number) => <Form.Item
                                noStyle
                                name={[index, 'status']}
                            >
                                <StatusSelectControl  />
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
                            render: (_: any, record: any, index: number) => <Form.Item
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
                    footer={() => <Button key="1" 
                        type="dashed" 
                        block 
                        icon={<CreateIcon />} onClick={() => setAddProcedureOpen(true)}
                    >
                        Agregar procedimiento
                    </Button>}
                />
            </>}
        </Form.List>
    </Form>
}