import { Table, Typography } from "antd"
import type { TableProps } from "antd"



export default function ItemsTable ({
    dataSource,
    columns,
    footer,
    size = 'small',
}: {
    dataSource?: TableProps<any>['dataSource'],
    columns?: TableProps<any>['columns'],
    footer?: TableProps<any>['footer'],
    size?: TableProps<any>['size'],
}) {
    return <Table
        size={size}
        dataSource={dataSource?.map((item: any, index: number) => ({key: index, ...item}) )}
        pagination={false}
        summary={(currentData) => {
            // round to 2 decimals
            const total = Math.round(currentData?.reduce((acc: number, item: any) => acc + item.total, 0) * 100) / 100
            return <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={3} />
                <Table.Summary.Cell index={1}>
                <Typography.Title level={5} style={{textAlign: 'right',}}>
                    Total
                    </Typography.Title>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                    <Typography.Title level={5}>
                    {total | 0}
                    </Typography.Title>
                </Table.Summary.Cell>
            </Table.Summary.Row>
        }}
        columns={columns}
        footer={footer}
    />
}
