import { useForm } from "@refinedev/antd";
import * as Icons from "@ant-design/icons";

import { Button, Card, Descriptions, Space, Form, Table, Input } from "antd";
import { Link } from "@remix-run/react"
import { Show } from "~/components/crud/Show";
import { useShow } from "@refinedev/core"


export default function EditPage() {
    
    const { queryResult } = useShow({
        meta: {
            populate: ['doctor', 'patient']
        }
    });

    const treatment = queryResult?.data?.data

    return <Show
        isLoading={queryResult?.isLoading}
    >
        <Card>
            <Descriptions 
            title={treatment?.name} 
        >
                <Descriptions.Item label="Doctor">{treatment?.doctor?.firstName} {treatment?.doctor?.lastName}</Descriptions.Item>
                <Descriptions.Item label="Paciente">{treatment?.patient?.firstName} {treatment?.patient?.lastName}</Descriptions.Item>
            </Descriptions>
        </Card>
        <Card
            bodyStyle={{ display: 'none'}}
            cover={
                <Table
                    size="small"
                    dataSource={treatment?.items?.map((item: any, index: number) => ({key: index, ...item}) )}
                    pagination={false}
                    summary={() => {
                        const total = treatment?.items?.reduce((acc: number, item: any) => acc + item.total, 0)
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
            }
        />
    </Show>
}
