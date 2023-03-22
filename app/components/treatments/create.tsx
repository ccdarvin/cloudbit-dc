import { useForm } from "@refinedev/antd";
import CreateDrawer from "~/components/crud/CreateDrawer"
import TreatmentForm from "~/components/treatments/form"


export default function Patients() {
    const { formProps, saveButtonProps } = useForm({
        action: "create",
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