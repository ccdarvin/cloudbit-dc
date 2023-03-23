import { AutoComplete, Collapse, Form, Input, Segmented, Space, Tag } from "antd"
import type { FormProps } from "antd"
import DatePicker from "../controls/DatePicker"
import TimePicker from "../controls/TimePicker"
import { useMany, HttpError, useList } from "@refinedev/core";
import { useMemo } from "react";
import { TreeSelect } from 'antd'
import type { TreeSelectProps } from 'antd'
import SelectDoctor from "../doctors/controls/SelectDoctor";
import SelectPatient from "../patients/controls/SelectPatient";
import SelectTreatment from "../treatments/controls/SelectTreatment";
import RichEditor from "../controls/RichEditor";


export default function EventForm({
    ...props
}: FormProps) {

        
    return <Form 
        layout="vertical"
        {...props}
    >
        <Form.Item 
            name="title"
            rules={[{ required: true, message: 'Por favor ingrese un título' }]}
        >
            <Input size="large" placeholder="Agregar un titulo" />
        </Form.Item>
        <Form.Item
            name="type"
            rules={[{ required: true, message: 'Por favor seleccione un tipo' }]}
        >
            <Segmented
                block
                size="large"
                options={[
                    { label: 'Cita', value: 'appointment' },
                    { label: 'Tarea', value: 'task' },
                    { label: 'Recordatorio', value: 'reminder'}
                ]}
            />
        </Form.Item>
        <Form.Item label="Horario" required>
            <Space.Compact block>
                <Form.Item
                    name="date"
                    noStyle
                    rules={[{ required: true, message: 'Por favor seleccione una fecha' }]}
                >
                    <DatePicker style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item
                    name="time"
                    noStyle
                    rules={[{ required: true, message: 'Por favor seleccione una hora' }]}
                >
                    <TimePicker style={{ width: '30%' }} />
                </Form.Item>
            
                <Form.Item
                    name="duration"
                    rules={[{ required: true, message: 'Por favor seleccione una duración' }]}
                    noStyle
                >
                    <AutoComplete
                        placeholder="Duración"
                        style={{ width: '20%' }}
                        tagRender={({ label }) => <Tag>{label}</Tag>}
                        options={[
                            { label: '15 minutos', value: '15' },
                            { label: '30 minutos', value: '30' },
                            { label: '45 minutos', value: '45' },
                            { label: '1 hora', value: '60' },
                            { label: '1 hora 15 minutos', value: '75' },
                            { label: '1 hora 30 minutos', value: '90' },
                            { label: '1 hora 45 minutos', value: '105' },
                            { label: '2 horas', value: '120' },
                        ]}
                    />
                </Form.Item>
            </Space.Compact>
        </Form.Item>
        <Collapse defaultActiveKey={['1']}>
            <Collapse.Panel header="Relacionado con" key="1">
                <Space.Compact block>
                    <Form.Item
                        name="doctor"
                        label="Doctor"
                        style={{ width: '50%' }}
                    >
                        <SelectDoctor />
                    </Form.Item>
                    <Form.Item
                        name="patient"
                        label="Paciente"
                        style={{ width: '50%' }}
                    >
                        <SelectPatient />
                    </Form.Item>
                </Space.Compact>
                <Form.Item
                    name="treatment"
                    label="Tratamiento"   
                >
                    <SelectTreatment />
                </Form.Item>
            </Collapse.Panel>
        </Collapse>
        <Form.Item
            name="description"
            label="Descripción"
        >
            <RichEditor />
        </Form.Item>
    </Form>
}
