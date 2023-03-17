import { useForm } from "@refinedev/antd"
import CreateDrawer from "~/components/crud/CreateDrawer"
import TreatmentForm from "~/components/treatments/form"

export default function Patients() {
    const { formProps, saveButtonProps } = useForm({
        action: "edit",
        redirect: "show",
        meta: {
            populate: ['doctor', 'patient']
        }
    })

    return <div>
        <CreateDrawer
            open={true}
            size="extraLarge"
            saveButtonProps={saveButtonProps}
        >
            <TreatmentForm formProps={formProps} />
        </CreateDrawer>
    </div>
}