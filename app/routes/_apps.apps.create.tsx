import { useForm } from "@refinedev/antd"
import AppForm from "~/components/apps/AppForm"
import CreateDrawer from "~/components/crud/CreateDrawer"



export default function CreateApp() {
    const { formProps, saveButtonProps } = useForm({
        action: "create",
    })

    return <div>
        <CreateDrawer
            open={true}
            title="Crear aplicación"
            saveButtonProps={saveButtonProps}
        >
            <AppForm formProps={formProps}  />
        </CreateDrawer>
    </div>
}