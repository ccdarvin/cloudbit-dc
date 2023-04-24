import { Layout as AntdLayout, Typography, Avatar, Space, theme } from "antd";
import { useActiveAuthProvider, useGetIdentity } from "@refinedev/core";
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";

const { Text } = Typography;
const { useToken } = theme;

export default function ThemedHeaderV2 (
  props: RefineThemedLayoutV2HeaderProps
) {
  const { token } = useToken();

  const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });

  const shouldRenderHeader = user && (user.name || user.avatar);

  if (!shouldRenderHeader) {
    return null;
  }

  return (
    <AntdLayout.Header
      style={{
        backgroundColor: token.colorBgElevated,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "64px",
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
