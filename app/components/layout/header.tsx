import { Layout as AntdLayout, Typography, Avatar, Space, theme } from "antd"
import { useActiveAuthProvider, useGetIdentity } from "@refinedev/core"
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd"
import { createStyles } from "antd-style"

const useStyles = createStyles(({token} : any) => ({
  header: {
    backgroundColor: 'transparent',
  }
}))


const { Text } = Typography;
const { useToken } = theme;

export default function ThemedHeaderV2 (
  props: RefineThemedLayoutV2HeaderProps
) {
  const { token } = useToken()
  const { styles } = useStyles()
  const authProvider = useActiveAuthProvider()
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  })

  return (
    <AntdLayout.Header
      className={styles.header}
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
