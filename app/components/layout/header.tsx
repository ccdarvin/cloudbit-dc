import React, { useContext } from "react";
import { useGetIdentity, useActiveAuthProvider } from "@refinedev/core";
import { Layout as AntdLayout, Typography, Avatar, Space, Dropdown, Switch } from "antd";
import type { RefineLayoutHeaderProps } from "@refinedev/antd";
import { DarkIcon, LightIcon, UserIcon } from "../icons";
import { ColorModeContext } from "~/contexts";


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

  const { mode, setMode } = useContext(ColorModeContext)

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
        <Switch
          checkedChildren={<DarkIcon />}
          unCheckedChildren={<LightIcon />}
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        />
        {user && (
          <Typography.Text ellipsis strong>
            {user?.name}
          </Typography.Text>
        )}
        {user && (
          <AvatarUser />
        )}
      </Space>
    </AntdLayout.Header>
};
