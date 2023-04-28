import { useForm } from "@refinedev/antd"
import PatientsForm from "~/components/patients/form"
import EditDrawer from "~/components/crud/EditDrawer"
import { useSearchParams } from "@remix-run/react"

export default function PatientEdit({
    open,
    id,
    redirect,
}: {
    open: boolean,
    id: string,
    redirect?: 'show' | 'edit' | 'create' | 'list',
    initialData?: any
}) {
    const [searchParams] = useSearchParams()
    const { formProps, saveButtonProps } = useForm({
        action: "edit",
        id: id,
        redirect,
        meta: {
            populate: ['avatar'],
        }
    })
    return <div>
        <EditDrawer
            open={open}
            saveButtonProps={saveButtonProps}
        >
            <PatientsForm formProps={formProps}  />
        </EditDrawer>
    </div>
}