import { NavigateToResource } from "@refinedev/remix-router";

import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authProvider } from "~/authProvider";

/**
 * Since we don't have any routes for the index page, we're redirecting the user to the first resource.
 *
 * This can also be done using the `loader` function and `redirect`.
 */
export default function Index() {
    return <NavigateToResource resource="products" />;
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
