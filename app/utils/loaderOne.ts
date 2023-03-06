export { RemixRouteComponent as default } from "@pankod/refine-remix-router"
import { checkAuthentication } from "@pankod/refine-remix-router"
import { authProvider, axiosInstance } from "~/authProvider"
import { DataProvider } from "@pankod/refine-strapi-v4"
import { parseTableParams } from "@pankod/refine-core"
import { API_URL, TOKEN_KEY } from "~/constants"
import * as cookie from "cookie"



export const loaderOne = async ({ 
  resource,
  id,
  request 
}: {
  resource: string,
  id: string | number | undefined,
  request: Request
}) => {
  await checkAuthentication(authProvider, request);
  
  const url = new URL(request.url)

  const parsedCookie = cookie.parse(request.headers.get("Cookie") ?? "")
  const token = parsedCookie[TOKEN_KEY];

  if (token) {
    axiosInstance.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
      origin: request.url,
    }
  }

  try {
    const data = await DataProvider(API_URL + "/api", axiosInstance).getOne({
      resource: resource as string,
      id: id as string,
    })
    return { initialData: data }
  } catch (error) {
    return {}
  }
}
