import { SaveButton } from "@pankod/refine-antd"
import { useNavigate } from "@remix-run/react"
import { Drawer, Space, Spin } from "antd"
import { useEffect, useState } from "react"


export default function EditDrawer ({
    children,
    back=true,
    title,
    size = "large",
    open,
    onClose,
    saveButtonProps,
}: {
    children: React.ReactNode
    open: boolean
    back?: boolean
    title?: string
    size?: "default" | "large" 
    onClose?: () => void,
    saveButtonProps?: any
}) {
    const [_open, setOpen] = useState(false)
    useEffect(() => {
        setOpen(open)
    }, [open])
    const navigate = useNavigate()

    return <Drawer
        title={title}
        placement="right"
        size={size}
        mask={false}
        open={_open}
        onClose={() => {
            if (back) {
                navigate(-1)
            }
            onClose?.()
        }}
        footer={<Space>
            <SaveButton
                loading={saveButtonProps?.disabled}
                {...saveButtonProps} />
        </Space>}
    >
        <Spin spinning={saveButtonProps?.disabled} >
        {children}
        </Spin>
    </Drawer>
}