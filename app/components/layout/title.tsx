
import { useRouterContext, useRouterType, useLink } from "@refinedev/core"
import type { RefineLayoutThemedTitleProps } from "@refinedev/antd"
import { Typography, theme, Space } from "antd"
import { LogoIcon } from "~/components/icons"

const { useToken } = theme

const defaultText = "CLOUDBIT"


export default function ThemedTitleV2({
  collapsed,
  text = defaultText,
  size = "large",
}: RefineLayoutThemedTitleProps & { size?: "large" | "small" }){
  const { token } = useToken();
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

  return <ActiveLink
      to="/"
      style={{
        display: "inline-block",
        textDecoration: "none",
      }}
    >
      <Space style={{
        display: "flex",
        justifyItems: "center",
      }} >
          <LogoIcon style={{
            fontSize: collapsed ? '2.5rem': '2rem'
          }} />
        {!collapsed && (
          <Typography.Title style={{
            fontSize: size === "large" ? 24 : 20,
            margin: 0,
            color: token.colorPrimary,
          }}>
            {text}
          </Typography.Title>
        )}
      </Space>
    </ActiveLink>
};
