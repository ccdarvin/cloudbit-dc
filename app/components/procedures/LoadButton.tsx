import { Icons } from "@pankod/refine-antd"
import { useCustomMutation } from "@pankod/refine-core"
import { Button, Popconfirm } from "antd"
import { API_URL } from "~/constants"



export default function LoadProcedures ({
    onSuccess,
}: {
    onSuccess?: () => void
}){
    const { mutate, isLoading } = useCustomMutation()
    const handleLoad = () => {
        mutate({
            url: `${API_URL}/api/dc-procedures/load`,
            method: "post",
            values: {},
            successNotification: (data, values, resource) => {
                return {
                    message: `Procedimientos cargados correctamente`,
                    type: "success",
                };
            },
        }, {
            onSuccess: onSuccess,
        })
    }
        
    return <Popconfirm
        title="¿Está seguro de cargar o actualizar los procedimientos?"
        description="Se actualizarán los procedimientos existentes y se cargarán los nuevos"
        onConfirm={handleLoad}
    >
        <Button
            loading={isLoading}
            icon={<Icons.UploadOutlined />} 
        >
            Cargar
        </Button>
    </Popconfirm>
}