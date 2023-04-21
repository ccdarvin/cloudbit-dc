import { useForm } from "@refinedev/antd"
import EditDrawer from "../crud/EditDrawer"
import NoteForm from "./NoteForm"



export default function NoteEdit({
    open,
    onClose,
    onSuccess,
    noteId,
}: {
    open: boolean,
    onClose?: () => void,
    onSuccess?: () => void,
    noteId: string,
}) {

    const { formProps, saveButtonProps } = useForm({
        action: "edit",
        redirect: false,
        resource: "dc-notes",
        id: noteId,
        meta: {
            populate: ['note'],
        },
        onMutationSuccess(data, variables, context) {
            onSuccess?.()
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

