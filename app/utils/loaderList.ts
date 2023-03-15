export { RemixRouteComponent as default } from "@refinedev/remix-router/legacy";
import { checkAuthentication } from "@refinedev/remix-router/legacy";
import { authProvider, axiosInstance } from "~/authProvider"
import { DataProvider } from "@refinedev/strapi-v4";
import { parseTableParams } from "@refinedev/core";
import { API_URL, TOKEN_KEY } from "~/constants"
import * as cookie from "cookie"



export const loaderList = async ({ 
  resource, 
  request 
}: {
  resource: string,
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

  const { 
    parsedCurrent, 
    parsedPageSize, 
    parsedSorter, 
    parsedFilters 
  } = parseTableParams(url.search)

  try {
    const data = await DataProvider(API_URL + "/api", axiosInstance).getList({
      resource: resource as string,
      filters: parsedFilters,
      pagination: {
        current: parsedCurrent || 1,
        pageSize: parsedPageSize || 10,
      },
      sort: parsedSorter,
    })

    return { initialData: data }
  } catch (error) {
    return {}
  }
}
