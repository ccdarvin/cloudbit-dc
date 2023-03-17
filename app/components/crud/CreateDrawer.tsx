import { SaveButton } from "@refinedev/antd";
import { useNavigate } from "@remix-run/react"
import { Drawer, Space, Spin } from "antd"
import { useEffect, useState } from "react"


export default function CreateDrawer ({
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
    size?: "default" | "large" | "extraLarge" | "full"
    onClose?: () => void,
    saveButtonProps?: any
}) {
    const [_open, setOpen] = useState(false)
    useEffect(() => {
        setOpen(open)
    }, [open])
    const navigate = useNavigate()

    const maxWidth = size === "default" ? '40rem' : size === "large" ? '60rem' : size === "extraLarge" ? '80rem' : '100%'

    return <Drawer
        title={title}
        placement="right"
        width={'100%'}
        contentWrapperStyle={{ maxWidth }}
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