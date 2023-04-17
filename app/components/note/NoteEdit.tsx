import { useForm } from "@refinedev/antd"
import EditDrawer from "../crud/EditDrawer"
import NoteForm from "./NoteForm"



export default function NoteEdit({
    open,
    onClose,
    noteId,
}: {
    open: boolean,
    onClose?: () => void,
    noteId: string,
}) {

    const { formProps, saveButtonProps } = useForm({
        action: "edit",
        redirect: false,
        resource: "dc-notes",
        id: noteId,
        onMutationSuccess(data, variables, context) {
            onClose?.()
        },
    })

    return <div>
        <EditDrawer
            open={open}
            size="default"
            title="Editar nota"
            onClose={onClose}
            back={false}
            saveButtonProps={saveButtonProps}
        >
            <NoteForm 
                formProps={formProps}
            /> 
        </EditDrawer>
    </div>
}

