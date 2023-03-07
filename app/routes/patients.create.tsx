import { useForm } from "@pankod/refine-antd"
import CreateDrawer from "~/components/crud/CreateDrawer"
import PatientsForm from "~/components/patients/form"

const RESOURCE = "dc-patients"


export default function Patients() {
    const { formProps, saveButtonProps } = useForm({
        action: "create",
        resource: RESOURCE,
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