import { useForm } from "@refinedev/antd"
import CreateDrawer from "../crud/CreateDrawer"
import EventForm from "./Form"




export default function EventCreate ({
    open,
    onClose,
    initialValues
}: {
    open: boolean,
    onClose: () => void,
    initialValues: any  
}) {
    const { formProps, saveButtonProps } = useForm({
        action: "create",
    })
    return <div>
        <CreateDrawer
            open={open}
            back={false}
            onClose={onClose}
            size="default"
            saveButtonProps={saveButtonProps}
        >
            <EventForm 
                {...formProps} 
                initialValues={initialValues}
            />
        </CreateDrawer>
    </div>
}