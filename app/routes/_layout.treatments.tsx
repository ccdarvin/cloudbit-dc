import HeaderStatusField from "~/components/treatments/fields/HeaderStatusField"
import DropdownActions from "~/components/buttons/DropdownActions"
import { TreatmentEdit } from "~/components/treatments"
import ShowLink from "~/components/buttons/ShowLink"
import { useSearchParams } from "@remix-run/react"
import { List, useTable } from "@refinedev/antd"
import { Table } from "antd"

export default function Page() {
  const { tableProps } = useTable({
    meta: {
      populate: ["doctor", "patient"],
    },
  });
  const [searchParams] = useSearchParams();
  return (
    <List>
      <Table
        {...tableProps}
        rowKey="id"
        columns={[
          {
            title: "Nombre",
            render: (_, record) => (
              <ShowLink recordItemId={record?.id}>{record.name}</ShowLink>
            ),
          },
          {
            title: "Estado",
            dataIndex: "status",
            render: (_, record) => <HeaderStatusField value={record?.status} />,
          },
          {
            title: "Paciente",
            render: (_, record) =>
              record?.patient?.firstName + " " + record?.patient?.lastName,
          },
          {
            title: "Doctor",
            render: (_, record) => {
              if (record?.doctor) {
                return (
                  record?.doctor?.firstName + " " + record?.doctor?.lastName
                );
              }
              return "No asignado";
            },
          },
          {
            dataIndex: "actions",
            render: (_, record) => (
              <DropdownActions recordItemId={record?.id} />
            ),
          },
        ]}
      />
      <TreatmentEdit
        resourceItemId={searchParams.get("edit")}
        open={!!searchParams.get("edit")}
        redirect="list"
      />
    </List>
  );
}
