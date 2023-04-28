import type { RefineThemedLayoutV2Props } from "@refinedev/antd";
import { ThemedLayoutContextProvider } from "@refinedev/antd";
import { Grid, Layout as AntdLayout } from "antd";
import DefaultHeader from "./Header";
import DefaultSider from "./Sider";


export default function ThemedLayoutV2({
  children,
  Header,
  hasSider=true,
  Sider,
  Title,
  Footer,
  OffLayoutArea,
}: RefineThemedLayoutV2Props & { hasSider?: boolean }) {
  const breakpoint = Grid.useBreakpoint();
  const SiderToRender = Sider ?? DefaultSider;
  const HeaderToRender = Header ?? DefaultHeader;
  const isSmall = typeof breakpoint.sm === "undefined" ? true : breakpoint.sm;

  return (
    <ThemedLayoutContextProvider >
      <AntdLayout hasSider={hasSider} style={{ minHeight: "100vh", display: "flex" }}>
        {hasSider? <SiderToRender Title={Title} />: <div></div>}
        <AntdLayout>
          <HeaderToRender />
          <AntdLayout.Content>
            <div
              style={{
                minHeight: 360,
                padding: isSmall ? 24 : 12,
              }}
            >
              {children}
            </div>
            {OffLayoutArea && <OffLayoutArea />}
          </AntdLayout.Content>
          {Footer && <Footer />}
        </AntdLayout>
      </AntdLayout>
    </ThemedLayoutContextProvider>
  );
};
