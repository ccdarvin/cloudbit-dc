
/*
create drawere note
*/

import { useForm } from "@refinedev/antd"
import CreateDrawer from "../crud/CreateDrawer"
import NoteForm from "./NoteForm"

export default function NoteCreate({
    open,
    patient,
    onClose,
    onSuccess
}: {
    open: boolean,
    patient?: string,
    onClose?: () => void,
    onSuccess?: () => void,
}) {

    const { formProps, saveButtonProps } = useForm({
        action: "create",
        redirect: false,
        resource: "dc-notes",
        onMutationSuccess(data, variables, context) {
            onSuccess?.()
        },
    })

    return <div>
        <CreateDrawer
            open={open}
            size="default"
            title="Crear nota"
            onClose={onClose}
            back={false}
            saveButtonProps={saveButtonProps}
        >
            <NoteForm 
                formProps={formProps}
                patient={patient}
            /> 
        </CreateDrawer>
    </div>
}