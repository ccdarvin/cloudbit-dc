
import { Select } from "antd"
import type { SelectProps } from "antd"
import { useSelect } from "@refinedev/antd"


/*
control select treatment implementing in antd
*/

export default function SelectTreatment({
    ...props
}: SelectProps) {
    
    const { selectProps: treatmentSelectProps, queryResult,  } = useSelect({
        resource: "dc-treatments",
        debounce: 500,
        pagination: {
            mode: "server"
        },
        onSearch: (query) => [
            {
                operator: "or",
                value: [
                    {
                        field: "name",
                        operator: "contains",
                        value: query
                    }
                ]
            }
        ]
    })
    return <Select 
        {...props} 
        {...treatmentSelectProps}
        options={queryResult.data?.data.map((treatment: any) => ({
            label: `${treatment.name}`,
            value: treatment.id
        }))}
    />
}