
import { useTable } from "@pankod/refine-core"
import { useParams } from "@remix-run/react"
import CreateDrawer from "~/components/crud/CreateDrawer"
import TreatmentForm from "~/components/treatments/form"


const RESOURCE = "dc-treatments"

export default function Patients() {
    const { id } = useParams<{ id: string }>()
    const { formProps, saveButtonProps } = useTable({
        resource: RESOURCE,
        redirect: "show",
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
