
import { mediaUploadMapper } from "@refinedev/strapi-v4"
import { Form, Input, Select, Space, Divider, Col, Row } from "antd"
import UploadAvatar from "../controls/UploadAvatar"
import { useSelect, } from "@refinedev/antd"
import dayjs from "dayjs"
import SelectSex from "../controls/SelectSex"
import DatePicker from "../controls/DatePicker"


export default function PatientsForm(
    { formProps} : any
) {
    const { selectProps: countrySelectProps } = useSelect({
        resource: "countries",
        optionLabel: "name",
        optionValue: "id",
        pagination: {
            mode: "server"
        },
    })

    return <Form 
        {...formProps} 
        layout="vertical"
        onFinish={async (values) => {
            console.log(values)
            console.log(mediaUploadMapper(values))
            formProps.onFinish?.(
                mediaUploadMapper(values)
            )
        }}
        onFieldsChange={(changedFields, allFields) => {
            console.log(changedFields, allFields)
        }}
    >
    <Form.Item label="Nombre" required>
        <Space.Compact block>
            <Form.Item
                name={["firstName"]}
                noStyle
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input size="large" placeholder="Nombres"/>
            </Form.Item>
            <Form.Item
                name={["lastName"]}
                noStyle
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input size="large" placeholder="Apellidos"/>
            </Form.Item>
        </Space.Compact>
    </Form.Item>
    <Row gutter={24} align="middle">
        <Col flex="none">
            <Form.Item
                name="avatar"
                noStyle
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <UploadAvatar  />
            </Form.Item>
        </Col>
        <Col flex="auto">
            <Form.Item
                label="Documento de identidad"
                name={["idCardNumber"]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Fecha de nacimiento"
                name={["birthDate"]}
                getValueProps={(value) => ({
                    value: value ? dayjs(value) : undefined,
                })}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item
                label="Sexo"
                style={{width: "50%"}}
            >
                <SelectSex/>
            </Form.Item>
        </Col>
    </Row>
    <Space.Compact block>
        <Form.Item
            label="Correo electrónico"
            name={["email"]}
            rules={[{ type: 'email' }]}
            style={{width: "60%"}}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Teléfono"
            name={["phone"]}
            style={{width: "40%"}}
        >
            <Input />
        </Form.Item>
    </Space.Compact>
    <Divider>Direción</Divider>
    <Form.Item
        label="Pais"
        name={['country', 'id']}
    >
        <Select
            placeholder="Selecione um país"
            {...countrySelectProps} 
        />
    </Form.Item>
    <Space.Compact block>
        <Form.Item
            label="Estado"
            name={["state"]}
            style={{width: "50%"}}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Ciudad"
            name={["city"]}
            style={{width: "50%"}}
        >
            <Input />
        </Form.Item>
    </Space.Compact>
    <Form.Item 
        label="Dirección"
        name={["address"]}
    >
        <Input.TextArea />
    </Form.Item>
</Form>
}