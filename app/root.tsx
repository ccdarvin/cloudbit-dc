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
import { Refine } from "@refinedev/core";
import { AuthPage, notificationProvider } from "@refinedev/antd";
import { CalendarIcon, PatientIcon, SettingsIcon, TreatmentIcon } from "./components/icons"

import routerProvider, { UnsavedChangesNotifier } from "@refinedev/remix-router";
import { DataProvider } from "@refinedev/strapi-v4";
import resetStyle from "@refinedev/antd/dist/reset.css";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { authProvider, axiosInstance } from "~/authProvider";
import { API_URL, TOKEN_KEY } from "~/constants";
import { ColorModeContextProvider } from "@contexts";
import * as cookie from "cookie"
import localizedFormat from "dayjs/plugin/localizedFormat"
import timezone from 'dayjs/plugin/timezone'
import "dayjs/locale/es"
import dayjs from "dayjs"

dayjs.extend(localizedFormat)
dayjs.extend(timezone)
dayjs.locale('es')


export const meta: V2_MetaFunction = () => [
  {
    title: "Cloudbit App",
  },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
  },
  {
    name: "charset",
    content: "utf-8",
  },
];

export const loader = async ({ request }: LoaderArgs) => {
  const parsedCookie = cookie.parse(request.headers.get("Cookie") ?? "");
  const token = parsedCookie[TOKEN_KEY];
  const mode = parsedCookie["theme"];
  return json({
    token,
    mode,
  });
};

export default function App() {
  const { token, mode } = useLoaderData();
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
        <RefineKbarProvider>
          <ColorModeContextProvider defaultMode={mode}>
            <RefineKbarProvider>
              <Refine
                routerProvider={routerProvider}
                authProvider={authProvider}
                dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
                LoginPage={AuthPage}
                notificationProvider={notificationProvider}
                resources={[
                  {
                    name: "dc-events",
                    list: "/calendar",
                    create: "/calendar/create",
                    edit: "/calendar/:id/edit",
                    meta: {
                      label: "Calendario",
                      route: "calendar",
                      icon: <CalendarIcon />,
                    },
                  },
                  {
                    name: "dc-patients",
                    list: "/patients",
                    create: "/patients/create",
                    edit: "/patients/:id/edit",
                    show: "/patients/:id",
                    meta: {
                      label: "Pacientes",
                      route: "patients",
                      icon: <PatientIcon />,
                    },
                  },
                  {
                    name: "dc-treatments",
                    meta: {
                      label: "Tratamientos",
                      route: "treatments",
                      icon: <TreatmentIcon />,
                    },
                    list: "/treatments",
                    create: "/treatments/create",
                    edit: "/treatments/:id/edit",
                    show: "/treatments/:id",
                  },
                  {
                    name: "settings",
                    meta: {
                      label: "Configuraciones",
                      icon: <SettingsIcon />,
                    },
                  },
                  {
                    name: "dc-doctors",
                    meta: {
                      label: "Doctores",
                      route: "doctors",
                      parent: "settings",
                    },
                    list: "/doctors",
                    create: "/doctors/create",
                    edit: "/doctors/:id/edit",
                    show: "/doctors/:id",
                  },
                  {
                    name: "dc-procedures",
                    meta: {
                      label: "Procedimientos",
                      route: "procedures",
                      parent: "settings",
                    },
                    list: "/procedures",
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                }}
              >
                <>
                  <Outlet />
                  <UnsavedChangesNotifier />
                  <RefineKbar />
                </>
              </Refine>
            </RefineKbarProvider>
          </ColorModeContextProvider>
        </RefineKbarProvider>
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
