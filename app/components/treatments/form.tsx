
import { useSelect } from "@refinedev/antd";
import { Form, Input, Select, Space } from "antd";
import dayjs from "dayjs";

export default function TreatmentForm(
    { formProps} : any
) {
    const { selectProps: patientsSelectProps, queryResult: patientsQueryResult } = useSelect({
        resource: "dc-patients",

        pagination: {
            mode: "server"
        }
    })
    const { selectProps: doctorsSelectProps, queryResult: doctorsQueryResult } = useSelect({
        resource: "dc-doctors",

        pagination: {
            mode: "server"
        }
    })

    return <Form {...formProps} layout="vertical">
        <Form.Item
            name={["name"]}
            label="Nombre"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input placeholder="Nombres"/>
        </Form.Item>
        <Space.Compact block>
            <Form.Item
                label="Paciente"
                name={["patient","id"]}
                style={{ flex: '-0 1 50%' }}
            >
                <Select
                    placeholder="Selecione um paciente"
                    {...patientsSelectProps}
                    options={patientsQueryResult?.data?.data?.map((patient: any) => ({
                        label: patient.firstName + " " + patient.lastName,
                        value: patient.id,
                    }))}
                />
            </Form.Item>
            <Form.Item
                label="Doctor"
                name={["doctor","id"]}
                style={{ flex: '-0 1 50%' }}
            >
                <Select
                    placeholder="Selecione um doctor"
                    {...doctorsSelectProps}
                    options={doctorsQueryResult?.data?.data?.map((doctor: any) => ({
                        label: doctor.firstName + " " + doctor.lastName,
                        value: doctor.id,
                    }))}
                />  
            </Form.Item>
        </Space.Compact>
    </Form>
}