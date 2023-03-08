import { useForm } from "@pankod/refine-antd"
import { useParams } from "@remix-run/react"
import CreateDrawer from "~/components/crud/CreateDrawer"
import TreatmentForm from "~/components/treatments/form"


const RESOURCE = "dc-treatments"

export default function Patients() {
    const { id } = useParams<{ id: string }>()
    const { formProps, saveButtonProps } = useForm({
        action: "edit",
        resource: RESOURCE,
        id,
        metaData: {
            populate: ['doctor', 'patient']
        }
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