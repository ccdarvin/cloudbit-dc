import { useForm } from "@pankod/refine-antd"
import { useLoaderData, useNavigate, useParams } from "@remix-run/react"
import PatientsForm from "~/components/patients/form"
import EditDrawer from "~/components/crud/EditDrawer"

const RESOURCE = "dc-patients"

export default function EditPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { formProps, saveButtonProps } = useForm({
        action: "edit",
        resource: RESOURCE,
        id,
        redirect: false,
        onMutationSuccess(data, variables, context) {
            navigate(`/patients/${id}`)
        },
    })
    return <div>
        <EditDrawer
            open={true}
            saveButtonProps={saveButtonProps}
        >
            <PatientsForm formProps={formProps}  />
        </EditDrawer>
    </div>
}
