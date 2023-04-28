
import { Edit, useSimpleList } from "@refinedev/antd"
import { Button, Card, List, Typography } from "antd"
import EditButton from "~/components/buttons/EditButton"
import DropdownActions from "~/components/buttons/DropdownActions"
import { useSearchParams } from "@remix-run/react"

export default function AppPage () {

    const { queryResult } = useSimpleList({})
    const [searchParams, setSearchParams] = useSearchParams()

    const getAppUrl = (appCode: string) => {
        // verify is exists subdomain and get only domain
        const domain = window.location.host.split('.').slice(-2).join('.')
        // check https or http
        const protocol = window.location.protocol
        return `${protocol}//${appCode}.${domain}`
    }


    return <div>
        <Typography.Title>Mis Aplicaciones</Typography.Title>
        <List 
            grid={{ gutter: 16, column: 4 }}
            dataSource={queryResult?.data?.data}
            renderItem={item => <List.Item>
                <Card title={item.name}
                    actions={[
                        <Button type="link" href={item.url} onClick={()=> {}}>Ir a app</Button>,
                        <DropdownActions
                            showItem={{
                                url: () => {
                                    return getAppUrl(item.code)
                                }
                            }}
                            editItem={{
                                url: () => {
                                    searchParams.set('edit', item.id as string)
                                    return `?${searchParams.toString()}`
                                }
                            }}
                        />,
                    ]}
                />
            </List.Item>
            }
        />
    </div>
}