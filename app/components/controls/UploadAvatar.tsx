
import { LoadingOutlined, UploadOutlined } from '@ant-design/icons'
import { axiosInstance } from "~/authProvider"
import { useMatches } from "@remix-run/react"
import { useApiUrl } from "@refinedev/core"
import { useState } from "react"
import { Upload, Avatar, Spin } from "antd"
import { createStyles } from 'antd-style'
import { useFileUploadState } from '@refinedev/antd'
import { useEffect } from "react"


const useStyles = createStyles(({ token }: any) => ({
    upload: {
        position: "relative",
        display: "inline-block",
        '> .ant-upload': {
            paddingLeft: '1rem',
            paddingRight: '1rem',
        },
        '&:hover .uploadIcon': {
            display: "block",
        }
    },
    uploadIcon: {
        position: "absolute",
        top: "calc(50% - 20px)",
        left: "calc(50% - 20px)",
        color: "white",
        fontSize: 40,
        display: "none"
    },
    spin: {
        position: "absolute",
        top: "calc(50% - 20px)",
        left: "calc(50% - 20px)",
        "> .ant-spin-dot": {
            fontSize: 40,
        }
    },
    avatar: {
    }
}))

export default function UploadAvatar({
    value,
    onChange,
    size =  156,
}: {
    value?: any,
    size?: number,
    onChange?: (info:any) => void,
}) {
    const { styles, cx } = useStyles()
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage]: any = useState()
    const API_URL = useApiUrl()
    const [rootLoaderData] = useMatches()
    const { token }: any = rootLoaderData?.data || {}
    if (token) {
        axiosInstance.defaults.headers.common = {
          Authorization: `Bearer ${token}`,
        }
    }
    const fileUploadState = useFileUploadState()
    useEffect (() => {
        if (value?.provider == 'local') {
           const url = new URL(`${API_URL}/..${value.url}`)
           setImage({
                url: url.href,
           })
        }
    }, [])  
    
    return <Upload.Dragger
        listType="picture-card"
        className={styles.upload}
        showUploadList={false}
        customRequest={async (options: any) => {
            // upload to strapi using axios
            setIsLoading(true)
            const { file, onSuccess, onError } = options
            const formData = new FormData()
            formData.append("files", file)
            // set image as base64
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                setImage({
                    url: reader.result,
                })
            }
            try {
                const response = await axiosInstance.post(
                    `${API_URL}/upload`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                )
                onSuccess(response.data, file)
            } catch (error) {
                onError(error)
            }
            setIsLoading(false)
        }}
        onChange={async (info: any) => {
            onChange?.(info)
            fileUploadState.onChange?.(info)
        }}
        onRemove={async (file) => {
            const {id} = file.response[0]
            try {
                await axiosInstance.delete(`${API_URL}/upload/files/${id}`)
            } catch (error) {
                console.log(error)
            }
        }}
        multiple={false}
    >
        <Avatar
            src={image?.url}
            size={size}
        >
        </Avatar>
        {isLoading && <Spin
            className={styles.spin} 
            indicator={<LoadingOutlined spin /> } />}
        <UploadOutlined className={cx(styles.uploadIcon, 'uploadIcon')}/>
    </Upload.Dragger>
}