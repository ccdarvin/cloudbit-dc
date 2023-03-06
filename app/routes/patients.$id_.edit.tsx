import PatientsForm from "~/components/patients/form"
import { useDrawerForm } from "@pankod/refine-antd"
import { EditDrawer } from "~/components/crud"
import { useLoaderData, useParams } from "@remix-run/react"
import { useEffect } from "react"
import { loaderOne } from "~/utils"
import { json, LoaderFunction } from "@remix-run/node"

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
    const { formProps, drawerProps, saveButtonProps, show, queryResult } = useDrawerForm({
        action: "edit",
        resource: RESOURCE,
        id,
        metaData: {
            populate: ["country"],
        },
        queryOptions: {
            initialData,
        }
    })
    useEffect(() => {
        show()
    }, [])
    console.log(saveButtonProps)
    return <div>
        <EditDrawer
            saveButtonProps={saveButtonProps} drawerProps={{...drawerProps}}
            isLoading={queryResult?.isLoading}
        >
            <PatientsForm formProps={{
                ...formProps
            }} />
        </EditDrawer>
    </div>
}
