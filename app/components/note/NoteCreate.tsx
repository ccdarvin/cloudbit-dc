
/*
create drawere note
*/

import { useForm } from "@refinedev/antd"
import { useNavigation } from "@refinedev/core"
import CreateDrawer from "../crud/CreateDrawer"
import NoteForm from "./NoteForm"

export default function NoteCreate({
    open,
    patient,
    onClose,
}: {
    open: boolean,
    patient?: string,
    onClose?: () => void
}) {

    const { formProps, saveButtonProps } = useForm({
        action: "create",
        redirect: false,
        resource: "dc-notes",
        onMutationSuccess(data, variables, context) {
            onClose?.()
        },
    })

    return <div>
        <CreateDrawer
            open={open}
            size="default"
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