
/*
create drawere note
*/

import { useForm } from "@refinedev/antd"
import { useNavigation } from "@refinedev/core"
import CreateDrawer from "../crud/CreateDrawer"
import NoteForm from "./NoteForm"

export default function NoteCreate({
    open,
    patient
}: {
    open: boolean,
    patient?: string,
}) {

    const navigation = useNavigation()

    const { formProps, saveButtonProps } = useForm({
        action: "create",
        redirect: false,
        resource: "dc-notes",
        onMutationSuccess(data, variables, context) {
            navigation.goBack()
        },
    })

    return <div>
        <CreateDrawer
            open={open}
            size="default"
            saveButtonProps={saveButtonProps}
        >
            <NoteForm 
                formProps={formProps}
                patient={patient}
            /> 
        </CreateDrawer>
    </div>
}