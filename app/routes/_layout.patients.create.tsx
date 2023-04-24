import CreateDrawer from "~/components/crud/CreateDrawer"
import PatientsForm from "~/components/patients/form"
import { useForm } from "@refinedev/antd"


export default function Patients() {
    const { formProps, saveButtonProps } = useForm({
        action: "create"
    })

    return <div>
        <CreateDrawer
            open={true}
            saveButtonProps={saveButtonProps}
        >
            <PatientsForm formProps={formProps}  />
        </CreateDrawer>
    </div>
}
