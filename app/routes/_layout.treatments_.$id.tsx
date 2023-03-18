
import ItemsTable from "~/components/treatments/ItemsTable"
import { TREATMENT_STATUS } from "~/components/treatments/constants"
import { Show } from "~/components/crud/Show"
import { Card, Col, Descriptions, Row, Tag } from "antd"
import { Outlet } from "@remix-run/react"
import { useShow } from "@refinedev/core"
import DateField from "~/components/fields/DateField"
import HeaderStatusControl from "~/components/treatments/controls/HeaderStatusControl"


export default function EditPage() {
    
    const { queryResult } = useShow({
        meta: {
            populate: ['doctor', 'patient', 'items']
        }
    });

    const treatment = queryResult?.data?.data

    return <Show
        isLoading={queryResult?.isLoading}
    >
        <Row gutter={16}>
            <Col span={16}>
                <Card
                    bordered={false}
                >
                    <Descriptions 
                        layout="vertical"
                        column={2}
                    >   
                        <Descriptions.Item label="Nombre" span={2}>{treatment?.name}</Descriptions.Item>
                        <Descriptions.Item label="Doctor">{treatment?.doctor?.firstName} {treatment?.doctor?.lastName}</Descriptions.Item>
                        <Descriptions.Item label="Paciente">{treatment?.patient?.firstName} {treatment?.patient?.lastName}</Descriptions.Item>
                    </Descriptions>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    bordered={false}
                >
                    <Descriptions 
                        layout="vertical"
                        column={2}
                    >
                        <Descriptions.Item 
                            label="Estado"
                            span={2}
                        >
                            <HeaderStatusControl value={treatment?.status} />
                        </Descriptions.Item>
                        <Descriptions.Item label="Fecha de creación">
                            <DateField value={treatment?.createdAt} />
                        </Descriptions.Item>
                        <Descriptions.Item label="Fecha de actualización">
                            <DateField value={treatment?.createdAt} />
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </Col>
        </Row>
        <ItemsTable
            dataSource={treatment?.items}
            size="large"
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
                },
                {
                    title: 'Estado',
                    dataIndex: 'status',
                    render: (_, record) => {
                        const status = TREATMENT_STATUS.find(status => status.value === record.status)
                        return <Tag color={status?.color}>{status?.label}</Tag>
                    }
                },
                {
                    title: 'Cantidad',
                    dataIndex: 'quantity',
                },
                {
                    title: 'Precio / Descuento / Precio final',
                    dataIndex: 'price',
                },
                {
                    title: 'Total',
                    dataIndex: 'total'
                },
            ]}
        />
        <Outlet />
    </Show>
}
