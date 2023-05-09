import { Form } from "antd";



export default function AppForm ({
    formProps
} : {
    formProps: any,
}) {

    return <Form
        {...formProps}
        layout="vertical"
    >
        
    </Form>
} 
