
import { useForm } from "@refinedev/antd"
import { Create } from "~/components/crud/Create"
import CreateDrawer from "~/components/crud/CreateDrawer"
import TreatmentForm from "~/components/treatments/form"


export default function Treatments() {
    const { formProps, saveButtonProps } = useForm({
        action: "create",
    })
    return <CreateDrawer
        open
        saveButtonProps={saveButtonProps}
    >
        <TreatmentForm formProps={formProps} />
    </CreateDrawer>
}