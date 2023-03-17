import { useForm } from "@refinedev/antd";
import { useParams, useSearchParams } from "@remix-run/react"
import CreateDrawer from "~/components/crud/CreateDrawer"
import TreatmentForm from "~/components/treatments/form"


const RESOURCE = "dc-treatments"

export default function TreatmentEdit({
    open,
    redirect,
    resourceItemId,
}: {
    open: boolean,
    redirect?: 'show' | 'edit' | 'create' | 'list',
    resourceItemId?: string|undefined|null
}) {
    const { formProps, saveButtonProps } = useForm({
        action: "edit",
        resource: RESOURCE,
        id: resourceItemId as string,
        redirect: redirect,
        meta: {
            populate: ['doctor', 'patient', 'items']
        }
    })

    return <div>
        <CreateDrawer
            open={open}
            size="extraLarge"
            saveButtonProps={saveButtonProps}
        >
            <TreatmentForm formProps={formProps} />
        </CreateDrawer>
    </div>
}