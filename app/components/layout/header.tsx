import { Layout as AntdLayout, Typography, Avatar, Space, theme } from "antd"
import { useActiveAuthProvider, useGetIdentity } from "@refinedev/core"
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd"


const { Text } = Typography;
const { useToken } = theme;

export default function ThemedHeaderV2 (
  props: RefineThemedLayoutV2HeaderProps
) {
  const { token } = useToken()
  const authProvider = useActiveAuthProvider()
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  })

  return (
    <AntdLayout.Header
      style={{
        backgroundColor: 'transparent'
      }}
    >
      <Space>
        <Space size="middle">
          {user?.name && <Text strong>{user.name}</Text>}
          {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
        </Space>
      </Space>
    </AntdLayout.Header>
  )
}
