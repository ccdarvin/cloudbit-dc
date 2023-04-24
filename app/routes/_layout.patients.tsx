import DropdownActions from "~/components/buttons/DropdownActions"
import { Link, Outlet,  useSearchParams } from "@remix-run/react"
import RefreshButton from "~/components/buttons/RefreshButton"
import CreateButton from "~/components/buttons/CreateButton"
import { PatientEdit } from "~/components/patients"
import { List, useTable } from "@refinedev/antd"
import { Table, Tooltip } from "antd"
import dayjs from "dayjs"


export default function Patients() {
    const { tableProps } = useTable({})

    const [ searchParams, setSearchParams ] = useSearchParams()

    return <div>
        <List
            headerButtons={[
                <CreateButton key="create" />,
                <RefreshButton key="refresh" />,
            ]}
        >
            <Table 
                {...tableProps} rowKey="id"
                columns={[
                    {
                        title: "Name",
                        render: (_, record) => <Link to={`/patients/${record.id}`}>
                            {record.firstName} {record.lastName}
                        </Link>
                    },
                    {
                        title: "Correo electrónico",
                        dataIndex: "email",
                    },
                    {
                        title: "Teléfono",
                        dataIndex: "phone",
                    },
                    {
                        title: "edad",
                        dataIndex: "birthDate",
                        render: (_, record) => {
                            if (!record.birthDate) return '-'
                            const birthDate = dayjs(record.birthDate);
                            const today = dayjs();
                            const age = today.diff(birthDate, "year");
                            return  <Tooltip title={birthDate.format("LL")}><span>{age}</span></Tooltip>
                        }
                    },
                    {
                        dataIndex: "actions",
                        render: (_, record) => <DropdownActions recordItemId={record.id} />
                    }
                ]}
            />
        </List>
        <Outlet />
        <PatientEdit 
            open={searchParams.get('action')==='edit'}
            redirect="show"
        />
    </div>
}
