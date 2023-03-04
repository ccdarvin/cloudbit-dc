import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Refine } from "@pankod/refine-core";
import {
  AuthPage,
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";

import routerProvider from "@pankod/refine-remix-router";

import { DataProvider } from "@pankod/refine-strapi-v4";
import resetStyle from "@pankod/refine-antd/dist/reset.css";
import { AntdInferencer } from "@pankod/refine-inferencer/antd";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import { authProvider, axiosInstance } from "~/authProvider";
import { API_URL } from "~/constants";
import { ColorModeContextProvider } from "@contexts";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "~/components/layout";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix + Refine App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ColorModeContextProvider>
          <RefineKbarProvider>
            <Refine
              routerProvider={routerProvider}
              authProvider={authProvider}
              dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
              LoginPage={AuthPage}
              notificationProvider={notificationProvider}
              ReadyPage={ReadyPage}
              catchAll={<ErrorComponent />}
              resources={[
                {
                  name: "posts",
                  list: AntdInferencer,
                  edit: AntdInferencer,
                  show: AntdInferencer,
                  create: AntdInferencer,
                  canDelete: true,
                },
              ]}
              Title={Title}
              Header={Header}
              Sider={Sider}
              Footer={Footer}
              Layout={Layout}
              OffLayoutArea={OffLayoutArea}
            >
              <Outlet />
            </Refine>
          </RefineKbarProvider>
        </ColorModeContextProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: resetStyle }];
}
