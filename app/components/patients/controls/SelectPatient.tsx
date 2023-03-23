
import { useSelect } from "@refinedev/antd";
import { Select } from "antd";
import type { SelectProps } from "antd"


/*
 Select patient control using antd
*/
export default function SelectPatient({
    ...props
}: SelectProps) {
    
    const { selectProps: patientSelectProps, queryResult,  } = useSelect({
        resource: "dc-patients",
        debounce: 500,
        pagination: {
            mode: "server"
        },
        onSearch: (query) => [
            {
                operator: "or",
                value: [
                    {
                        field: "firstName",
                        operator: "contains",
                        value: query
                    },
                    {
                        field: "lastName",
                        operator: "contains",
                        value: query
                    }
                ]
            }
        ]
    })
    return <Select 
        {...props} 
        {...patientSelectProps}
        options={queryResult.data?.data.map((patient: any) => ({
            label: `${patient.firstName} ${patient.lastName}`,
            value: patient.id
        }))}
    />
}