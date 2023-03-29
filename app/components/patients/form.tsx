
import { useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker, Space, Divider, Upload } from "antd";
import dayjs from "dayjs";
import {
    useStrapiUpload,
    mediaUploadMapper,
    getValueProps,
} from "@refinedev/strapi-v4"
import { useApiUrl } from "@refinedev/core"
import { useMatches } from "react-router";
import { axiosInstance } from "~/authProvider";

export default function PatientsForm(
    { formProps} : any
) {
    const { selectProps: countrySelectProps } = useSelect({
        resource: "countries",
        optionLabel: "name",
        optionValue: "id",
        pagination: {
            mode: "server"
        }
    })

    const API_URL = useApiUrl()
    const [rootLoaderData] = useMatches()
    const { ...uploadProps } = useStrapiUpload({
        maxCount: 1,
    })
    const { token }: any = rootLoaderData?.data || {}
    if (token) {
        axiosInstance.defaults.headers.common = {
          Authorization: `Bearer ${token}`,
        };
    }
    return <Form {...formProps} layout="vertical">
    <Form.Item label="Image">
                    <Form.Item
                        name="image"
                        valuePropName="fileList"
                        getValueProps={(data) =>
                            getValueProps(data, API_URL)
                        }
                        noStyle
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Upload.Dragger
                            name="files"
                            action={`${API_URL}/upload`}
                            customRequest={async (options: any) => {
                                // upload to strapi using axios
                                const { file, onSuccess, onError, onUploadProgress } = options
                                const formData = new FormData()
                                formData.append("files", file)
                                try {
                                    const response = await axiosInstance.post(
                                        `${API_URL}/upload`,
                                        formData,
                                        {
                                            headers: {
                                                "Content-Type": "multipart/form-data",
                                            },
                                            onUploadProgress(progressEvent) {
                                                const { loaded, total } = progressEvent
                                                onUploadProgress(
                                                    {
                                                        percent: Math.floor(
                                                            (loaded * 100) / total
                                                        ),
                                                    },
                                                    file
                                                )
                                            },
                                        }
                                    )
                                    onSuccess(response.data, file)
                                } catch (error) {
                                    onError(error)
                                }
                            }}
                            onRemove={async (file) => {
                                const {id} = file.response[0]
                                try {
                                    await axiosInstance.delete(`${API_URL}/upload/files/${id}`)
                                } catch (error) {
                                    console.log(error)
                                }
                            }}
                            listType="picture"
                            multiple={false}
                            {...uploadProps}
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
    <Form.Item label="Nombre" required>
        <Input.Group compact style={{display: "flex"}}>
            <Form.Item
                name={["firstName"]}
                noStyle
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Nombres"/>
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
                <Input placeholder="Apellidos"/>
            </Form.Item>
        </Input.Group>
    </Form.Item>
    <Space.Compact block>
        <Form.Item
            label="Fecha de nacimiento"
            name={["birthDate"]}
            style={{width: "50%"}}
            getValueProps={(value) => ({
                value: value ? dayjs(value) : undefined,
            })}
        >
            <DatePicker style={{width: '100%'}}  />
        </Form.Item>
        <Form.Item
            label="Sexo"
            name={['sex']}
            style={{width: "50%"}}
        >
            <Select placeholder="Seleccionar" options={[
                {label: "Masculino", value: "M"},
                {label: "Femenino", value: "F"},
            ]}/>
        </Form.Item>
    </Space.Compact>
    <Form.Item
        label="Documento de identidad"
        name={["idCardNumber"]}
    >
        <Input />
    </Form.Item>
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