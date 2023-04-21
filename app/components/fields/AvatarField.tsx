
import { Avatar } from 'antd';
import { useState, useEffect } from 'react'
import { UserIcon } from '../icons'
import { useApiUrl } from "@refinedev/core"



export default function AvatarField({
    value,
    size
}: { 
    value?: any,
    size?: number
}) {

    const [urlImage, setUrlImage] = useState<string | null>(null)
    const API_URL = useApiUrl()
    useEffect(() => {
        if (value?.provider == 'local') {
            const url = new URL(`${API_URL}/..${value.url}`)
            setUrlImage(url.href)
         }
    }, [value])

    return <Avatar src={urlImage} size={size} icon={
        !urlImage && <UserIcon />
    }>
    </Avatar>
}