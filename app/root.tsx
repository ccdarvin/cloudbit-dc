import { json, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { Refine } from "@pankod/refine-core";
import {
  AuthPage,
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";

import routerProvider from "@pankod/refine-remix-router";
import { checkAuthentication } from "@pankod/refine-remix-router";
import { DataProvider } from "@pankod/refine-strapi-v4";
import resetStyle from "@pankod/refine-antd/dist/reset.css";
import { RefineKbarProvider } from "@pankod/refine-kbar"
import { authProvider, axiosInstance } from "~/authProvider";
import { API_URL, TOKEN_KEY } from "~/constants";
import { ColorModeContextProvider } from "@contexts";
import * as cookie from "cookie";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "~/components/layout";

export const meta: V2_MetaFunction = () => ([
  {
    title: "Cloudbit App",
  },{
    name: "viewport",
    content: "width=device-width, initial-scale=1",
  }, {
    name: "charset",
    content: "utf-8",
  }
]);

export const loader = async ({ request }: LoaderArgs) => {
  const parsedCookie = cookie.parse(request.headers.get("Cookie") ?? "")
  const token = parsedCookie[TOKEN_KEY]
  const theme = parsedCookie["theme"]
  return json({ 
    token,
    theme
  });
}

export default function App() {
  const { token, theme } = useLoaderData()
  if (token) {
    axiosInstance.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }
  return (
    <html lang="es">
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
              resources={[{
                name: "dc-patients",
                options: {
                  label: "Pacientes",
                  route: "patients",
                },
                list: () => null,
                create: () => null,
                edit: () => null,
              },
              {
                name: "dc-doctors",
                options: {
                  label: "Doctores",
                  route: "doctors",
                },
                list: () => null,
                create: () => null,
                edit: () => null,
              },
              {
                name: "dc-treatments",
                options: {
                  label: "Tratamientos",
                  route: "treatments",
                },
                list: () => null,
                create: () => null,
                edit: () => null,
              }
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
