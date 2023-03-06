import { useForm } from "@pankod/refine-antd"
import { useLoaderData, useParams } from "@remix-run/react"
import { json, LoaderFunction } from "@remix-run/node"
import PatientsForm from "~/components/patients/form"
import { loaderOne } from "~/utils"
import EditDrawer from "~/components/crud/EditDrawer"

const RESOURCE = "dc-patients"


export const loader: LoaderFunction = async ({ request, params }) => {
    const data = await loaderOne({
        resource: RESOURCE,
        request,
        id: params.id,
    })
    return json(data)
}


export default function EditPage() {
    const { id } = useParams()
    const { initialData } = useLoaderData()
    const { formProps, saveButtonProps } = useForm({
        action: "edit",
        resource: RESOURCE,
        id,
        queryOptions: {
            initialData
        }
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
