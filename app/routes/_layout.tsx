import { Layout } from "@refinedev/antd";
import { Outlet } from "@remix-run/react";

import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authProvider } from "~/authProvider";

import { Header } from "@components/layout/header";
import { Sider } from "~/components/layout/sider";
import { Title } from "~/components/layout/title";

export default function BaseLayout() {
  return (
    <>
      <Layout Header={Header} Sider={Sider} Title={Title} >
        <Outlet />
      </Layout>
    </>
  );
}

/**
 * We're checking if the current session is authenticated.
 * If not, we're redirecting the user to the login page.
 * This is applied for all routes that are nested under this layout (_protected).
 */
export async function loader({ request }: LoaderArgs) {
  const { authenticated, redirectTo } = await authProvider.check(request);

  if (!authenticated) {
    throw redirect(redirectTo ?? "/login");
  }

  return {};
}
