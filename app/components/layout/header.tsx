import React from "react";
import { useGetIdentity, useActiveAuthProvider } from "@refinedev/core";
import { Layout as AntdLayout, Typography, Avatar, Space } from "antd";
import type { RefineLayoutHeaderProps } from "@refinedev/antd";
import { UserIcon } from "../icons";

const { Text } = Typography;

export const Header: React.FC<RefineLayoutHeaderProps> = () => {
  const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  })

  const AvatarUser = () => {
    if (user.avatar) {
      return <Avatar size="default" src={user?.avatar} alt={user?.name} />;
    }
    return <Avatar size="default" icon={<UserIcon />} />;
  }

  return <AntdLayout.Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "64px",
        background: "transparent",
      }}
    >
      <Space>
        {user && (
          <Text ellipsis strong>
            {user?.name}
          </Text>
        )}
        {user && (
          <AvatarUser />
        )}
      </Space>
    </AntdLayout.Header>
};
