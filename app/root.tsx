import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import { CalendarIcon, PatientIcon, SettingsIcon, TreatmentIcon } from "./components/icons"
import routerProvider, { UnsavedChangesNotifier } from "@refinedev/remix-router"
import { notificationProvider } from "@refinedev/antd"
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar"
import { authProvider, axiosInstance } from "~/authProvider"
import localizedFormat from "dayjs/plugin/localizedFormat"
import resetStyle from "@refinedev/antd/dist/reset.css"
import { ColorModeContextProvider } from "@contexts"
import { DataProvider } from "@refinedev/strapi-v4"
import { HeadersFunction, json, LoaderArgs, V2_MetaFunction } from "@remix-run/node"
import { API_URL, TOKEN_KEY } from "~/constants"
import timezone from 'dayjs/plugin/timezone'
import { Refine } from "@refinedev/core"
import * as cookie from "cookie"
import dayjs from "dayjs"
import "dayjs/locale/es"


dayjs.extend(localizedFormat)
dayjs.extend(timezone)
dayjs.locale('es')

export const loader = async ({ request }: LoaderArgs) => {
  const parsedCookie = cookie.parse(request.headers.get("Cookie") ?? "")
  const token = parsedCookie[TOKEN_KEY]
  const mode = parsedCookie["theme"]

  return json({
    token,
    mode,
  })
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Dental Clinic" },
    { name: "viewport", content: "width=device-width, initial-scale=1" }
  ]
}
export default function App() {
  const { token, mode } = useLoaderData()
  if (token) {
    axiosInstance.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    }
  }

  return <html lang="es">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined"
          ? "__STYLES__"
          : null}
      </head>
      <body>
        <RefineKbarProvider>
          <ColorModeContextProvider defaultMode={mode}>
            <RefineKbarProvider>
              <Refine
                routerProvider={routerProvider}
                authProvider={authProvider}
                dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
                notificationProvider={notificationProvider}
                resources={[
                  {
                    name: "apps",
                    create: "/apps/create",
                    list: "/apps",
                    meta: {
                      //hide: true,
                    },
                  },
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
                  mutationMode: "optimistic",
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
}

export function links() {
  return [{ rel: "stylesheet", href: resetStyle }];
}
