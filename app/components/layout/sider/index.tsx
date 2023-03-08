import React, { useState } from "react";
import {
  AntdLayout,
  ConfigProvider,
  Menu,
  Grid,
  Icons,
  Drawer,
  Sider as DefaultSider,
  Button,
} from "@pankod/refine-antd";
import {
  useTranslate,
  useLogout,
  useTitle,
  CanAccess,
  ITreeMenu,
  useIsExistAuthentication,
  useRouterContext,
  useMenu,
  useRefineContext,
} from "@pankod/refine-core";
import { Title as DefaultTitle } from "../title";
import { drawerButtonStyles } from "./styles";
import type { MenuProps } from 'antd';

const {
  UnorderedListOutlined,
  LogoutOutlined,
  DashboardOutlined,
  BarsOutlined,
} = Icons;
const { SubMenu } = Menu;


export const Sider: typeof DefaultSider = ({ render }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const isExistAuthentication = useIsExistAuthentication();
  const { Link } = useRouterContext();
  const { mutate: mutateLogout } = useLogout();
  const Title = useTitle();
  const translate = useTranslate();
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
  const breakpoint = Grid.useBreakpoint();
  const { hasDashboard } = useRefineContext();

  const isMobile =
    typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;

  const RenderToTitle = Title ?? DefaultTitle;

  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
    return tree.map((item: ITreeMenu) => {
      const { icon, label, route, name, children, parentName } = item;
      if (children.length > 0) {
        return (
          <CanAccess
            key={route}
            resource={name.toLowerCase()}
            action="list"
            params={{
              resource: item,
            }}
          >
            <SubMenu
              key={route}
              icon={icon ?? <UnorderedListOutlined />}
              title={label}
            >
              {renderTreeView(children, selectedKey)}
            </SubMenu>
          </CanAccess>
        );
      }
      const isSelected = route === selectedKey;
      const isRoute = !(parentName !== undefined && children.length === 0);
      return (
        <CanAccess
          key={route}
          resource={name.toLowerCase()}
          action="list"
          params={{
            resource: item,
          }}
        >
          <Menu.Item
            key={route}
            style={{
              fontWeight: isSelected ? "bold" : "normal",
            }}
            icon={icon ?? (isRoute && <UnorderedListOutlined />)}
          >
            <Link to={route}>{label}</Link>
            {!collapsed && isSelected && (
              <div className="ant-menu-tree-arrow" />
            )}
          </Menu.Item>
        </CanAccess>
      );
    });
  };


  const logout: MenuProps['items'] = isExistAuthentication ? [{
    key: 'logout',
    icon: <LogoutOutlined />,
    label: translate("buttons.logout", "Logout"),
    onClick: () => {
      mutateLogout();
    }
  }]: [];

  const dashboard: MenuProps['items'] = hasDashboard ? [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      title: translate("dashboard.title", "Dashboard"),
      label: <Link to="/">{translate("dashboard.title", "Dashboard")}</Link>
     }
  ] : [];

  //const items = renderTreeView(menuItems, selectedKey);

  const items: MenuProps['items'] = [
    {
      key: 'patients',
      icon: <Icons.CaretRightOutlined />,
      title: translate("patients.title", "Pacientes"),
      label: <Link to="/patients">{translate("patients.title", "Patient")}</Link>
    },
    {
      key: 'treatments',
      icon: <Icons.CaretRightOutlined />,
      title: translate("treatments.title", "Tratamientos"),
      label: <Link to="/treatments">{translate("treatments.title", "Treatment")}</Link>
    },
    {
      type: 'divider',
    },
    {
      key: 'settings',
      icon: <Icons.SettingOutlined />,
      title: translate("settings.title", "Configuración"),
      label: translate("settings.title", "Configuración"),
      children: [
        {
          key: 'doctors',
          icon: <Icons.LineOutlined />,
          title: translate("doctors.title", "Médicos"),
          label: <Link to="/doctors">{translate("doctors.title", "Doctor")}</Link>
        }
      ]
    },
  ]

  const renderSider = () => {
    if (render) {
      return [
        ...dashboard,
        ...items,
        //...logout,
        //collapsed,
      ];
    }
    return [
      ...dashboard,
      ...items,
      //...logout
    ]
  }

  const renderMenu = () => {
    return (
      <Menu
        selectedKeys={[selectedKey]}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        items={renderSider()}
        onClick={() => {
          setDrawerOpen(false);
          if (!breakpoint.lg) {
            setCollapsed(true);
          }
        }}
      />
    );
  };

  const renderDrawerSider = () => {
    return <>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement="left"
        closable={false}
        width={200}
        bodyStyle={{
          padding: 0,
        }}
        maskClosable={true}
      >
        <AntdLayout>
          <AntdLayout.Sider style={{ height: "100vh", overflow: "hidden" }}>
            <RenderToTitle collapsed={false} />
            {renderMenu()}
          </AntdLayout.Sider>
        </AntdLayout>
      </Drawer>
      <Button
        style={drawerButtonStyles}
        size="large"
        onClick={() => setDrawerOpen(true)}
        icon={<BarsOutlined />}
      ></Button>
    </>
  };

  const renderContent = () => {
    if (isMobile) {
      return renderDrawerSider();
    }

    return <AntdLayout.Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
        collapsedWidth={80}
        breakpoint="lg"
      >
        <RenderToTitle collapsed={collapsed} />
        {renderMenu()}
      </AntdLayout.Sider>
  }

  return renderContent()
};
