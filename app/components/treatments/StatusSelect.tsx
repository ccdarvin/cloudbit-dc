import { Badge, Select } from "antd";
import colors from "../colors"


export default function StatusSelect({
    value,
    onChange,
}: {
    value?: string,
    onChange?: (value: string) => void,
}) {
    return <Select
        value={value}
        onChange={onChange}
        defaultValue="planned"
        placeholder="Selecciona un estado"
        bordered={false}
        options={[
            { label: <Badge color={colors.PLANNED} text="Planificado" />, value: "planned" },
            { label: <Badge color={colors.ACEPTED} text="Aceptado" />, value: "acepted" },
            { label: <Badge color={colors.IN_PROGRESS} text="En progreso" />, value: "in_progress" },
            { label: <Badge color={colors.FINISHED} text="Finalizado" />, value: "finished" },
            { label: <Badge color={colors.CANCELED} text="Cancelado" />, value: "canceled" },
        ]}
    />
}
