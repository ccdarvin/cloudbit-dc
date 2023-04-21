import { Form } from "antd";
import RichEditor from "../controls/RichEditor";



export default function NoteForm ({ 
    formProps,
    patient,
} : {
    formProps: any,
    patient?: string,
}) {

    const handlerFinish = (values: any) => {
        if (patient) {
            values.patient = patient
        }
        formProps?.onFinish(values)
    }
    console.log(formProps)
    return <Form 
        {...formProps} 
        layout="vertical"
        onFinish={handlerFinish}
    >
        <Form.Item
            name={["note"]}
            noStyle
            rules={[{ required: true }]}
        >
            <RichEditor />
        </Form.Item>
    </Form>
}