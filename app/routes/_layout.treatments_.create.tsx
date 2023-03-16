
import { useForm } from "@refinedev/antd"
import { Create } from "~/components/crud"
import TreatmentForm from "~/components/treatments/form"


export default function Treatments() {
    const { formProps, saveButtonProps } = useForm({
        action: "create",
    })
    return <Create
        goBack={false}
        saveButtonProps={saveButtonProps}
    >
        <TreatmentForm formProps={formProps} />
    </Create>
}