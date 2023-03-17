import { useForm } from "@refinedev/antd";
import * as Icons from "@ant-design/icons";

import { Card, Descriptions, Table, Typography } from "antd";
import { Link, Outlet } from "@remix-run/react"
import { Show } from "~/components/crud/Show";
import { useShow } from "@refinedev/core"
import ItemsTable from "~/components/treatments/ItemsTable";


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
        <Card>
            <Descriptions 
            title={treatment?.name} 
        >
                <Descriptions.Item label="Doctor">{treatment?.doctor?.firstName} {treatment?.doctor?.lastName}</Descriptions.Item>
                <Descriptions.Item label="Paciente">{treatment?.patient?.firstName} {treatment?.patient?.lastName}</Descriptions.Item>
            </Descriptions>
        </Card>
        <ItemsTable
            dataSource={treatment?.items}
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
        <Outlet />
    </Show>
}
