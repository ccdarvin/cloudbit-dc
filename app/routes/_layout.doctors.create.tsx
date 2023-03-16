import { useForm } from "@refinedev/antd";
import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { loaderList } from "~/utils"
import dayjs from "dayjs"
import CreateDrawer from "~/components/crud/CreateDrawer"
import DoctorForm from "~/components/doctors/form"

const RESOURCE = "dc-doctors"


export default function Patients() {
    const { formProps, saveButtonProps } = useForm({
        action: "create",
        resource: RESOURCE,
    })

    return <div>
        <CreateDrawer
            open={true}
            saveButtonProps={saveButtonProps}
        >
            <DoctorForm formProps={formProps}  />
        </CreateDrawer>
    </div>
}