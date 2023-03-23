import { Select } from "antd"
import type { SelectProps } from "antd"
import { useSelect } from "@refinedev/antd"



/*
control Antd Select component
*/
export default function SelectDoctor({
    ...props
}: SelectProps) {
    
    const { selectProps: doctorSelectProps, queryResult,  } = useSelect({
        resource: "dc-doctors",
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
        {...doctorSelectProps}
        options={queryResult.data?.data.map((doctor: any) => ({
            label: `${doctor.firstName} ${doctor.lastName}`,
            value: doctor.id
        }))}
    />
}
