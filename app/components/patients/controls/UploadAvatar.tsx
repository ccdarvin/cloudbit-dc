import { Avatar, Space, Typography, Upload } from "antd"
import { UserIcon } from "~/components/icons"
import { useState } from "react"
import {
    useStrapiUpload,
    mediaUploadMapper,
    getValueProps,
} from "@refinedev/strapi-v4"
import { useApiUrl } from "@refinedev/core"
import { useMatches } from "@remix-run/react"



export default function UploadAvatar({
    patient
}: {
    patient?: any
}) {
    
    const API_URL = useApiUrl()
    const [rootLoaderData] = useMatches();

    const [isHovering, setIsHovering] = useState(false)
    const style = {
        backgroundColor: "transparent",
        border: "none",
    }
    const { ...uploadProps } = useStrapiUpload({
        maxCount: 1,
    })

    

    return <div 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
        <Upload.Dragger  
            style={isHovering ? {} : style}
            action={`${API_URL}/upload`}
            headers={{
                Authorization: `Bearer ${rootLoaderData?.data?.token}`,
                // cross site
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
            }}
            customRequest={async (options) => {
                console.log(options)
            }}
            multiple={false}
            listType="picture"
            name="files"
            {...uploadProps}
        >
            <Space direction="vertical" style={{minWidth: '15rem'}} align="center">
                <Avatar size={128} icon={<UserIcon />} />
                <Space>
                    <Typography.Text strong>{patient?.firstName} {patient?.lastName}</Typography.Text>
                </Space>
            </Space>
        </Upload.Dragger>
    </div>
}