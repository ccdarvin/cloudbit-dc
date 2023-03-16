
import { useSelect } from "@refinedev/antd";
import { Form, Input, Descriptions, Card, Space, Select, Row, Col, DatePicker } from "antd";
import dayjs from "dayjs";

export default function TreatmentForm({ 
    formProps
} : {
    formProps: any
}) {
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

    return <Form 
        {...formProps} 
        layout="vertical"
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }}
    >
        <Row gutter={16}>
            <Col span={16}>
                <Card
                    bordered={false}
                >
                    <Form.Item
                        label="Nombre"
                        rules={[{ required: true, message: 'Por favor ingrese el nombre del tratamiento' }]}
                        name={['name']}
                    >
                        <Input />
                    </Form.Item>
                    <Space.Compact block>
                        <Form.Item
                            style={{ flex: '-0 1 50%' }}
                            label="Doctor"
                            rules={[{ required: true, message: 'Por favor seleccione un doctor' }]} 
                            name={['doctor', 'id']}>
                            <Select
                                placeholder="Selecione um doctor"
                                {...doctorsSelectProps}
                                options={doctorsQueryResult?.data?.data?.map((doctor: any) => ({
                                    label: doctor.firstName + " " + doctor.lastName,
                                    value: doctor.id,
                                }))}
                        /> 
                        </Form.Item>
                        <Form.Item
                            style={{ flex: '-0 1 50%' }}
                            label="Paciente"
                            rules={[{ required: true, message: 'Por favor seleccione un paciente' }]}
                            name={['patient', 'id']}
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
                    </Space.Compact>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    bordered={false}
                >   
                    <Form.Item label="Estado" name={['status']}>
                        <Select />
                    </Form.Item>
                    <Space.Compact block>
                        <Form.Item 
                            label="Fecha de inicio" 
                            name={['startDate']}
                            style={{ flex: '-0 1 50%' }}
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item 
                            label="Fecha de finalización" 
                            name={['endDate']}
                            style={{ flex: '-0 1 50%' }}
                        >
                            <DatePicker />
                        </Form.Item>
                    </Space.Compact>
                </Card>
            </Col>
        </Row>
        
    </Form>
}