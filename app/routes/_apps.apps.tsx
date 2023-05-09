
import { Edit, List, useSimpleList } from "@refinedev/antd"
import { Button, Card, List as ListAnt, Typography } from "antd"
import EditButton from "~/components/buttons/EditButton"
import DropdownActions from "~/components/buttons/DropdownActions"
import { Outlet, useSearchParams } from "@remix-run/react"

export default function AppPage () {

    const { queryResult, listProps } = useSimpleList({})
    const [searchParams, setSearchParams] = useSearchParams()

    const getAppUrl = (appCode: string) => {
        // verify is exists subdomain and get only domain
        const domain = window.location.host.split('.').slice(-2).join('.')
        // check https or http
        const protocol = window.location.protocol
        return `${protocol}//${appCode}.${domain}`
    }


    return <List
        title="Mis aplicaciones"
    >
        <ListAnt 
            {...listProps}
            grid={{ gutter: 16, column: 4 }}
            dataSource={queryResult?.data?.data}
            renderItem={item => <ListAnt.Item>
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
            </ListAnt.Item>
            }
        />
        <Outlet />
    </List>
}