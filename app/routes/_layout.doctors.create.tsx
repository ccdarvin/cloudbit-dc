import CreateDrawer from "~/components/crud/CreateDrawer"
import DoctorForm from "~/components/doctors/form"
import { useForm } from "@refinedev/antd"


export default function Patients() {
    const { formProps, saveButtonProps } = useForm({
        action: "create",
    })

    return <div>
        <CreateDrawer
            open={true}
            saveButtonProps={saveButtonProps}
        >
            <DoctorForm formProps={formProps}  />
        </CreateDrawer>
    </div>
}
