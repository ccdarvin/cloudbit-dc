import { useForm } from "@refinedev/antd";
import CreateDrawer from "~/components/crud/CreateDrawer"
import TreatmentForm from "~/components/treatments/form"


const RESOURCE = "dc-treatments"

export default function Patients() {
    const { formProps, saveButtonProps } = useForm({
        action: "create",
        resource: RESOURCE,
        redirect: "show",
    })

    return <div>
        <CreateDrawer
            open={true}
            saveButtonProps={saveButtonProps}
        >
            <TreatmentForm formProps={formProps} />
        </CreateDrawer>
    </div>
}