import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import * as cookie from "cookie";
import { parseTableParams } from "@pankod/refine-core";
import { DataProvider } from "@pankod/refine-strapi-v4";
import { checkAuthentication } from "@pankod/refine-remix-router";

import { authProvider, axiosInstance } from "~/authProvider";

export { RemixRouteComponent as default } from "@pankod/refine-remix-router";

import { API_URL, TOKEN_KEY } from "~/constants";

export const loader: LoaderFunction = async ({ params, request }) => {
  await checkAuthentication(authProvider, request);

  // get last segment of url
  const resource = params.resource || request.url.split("/").pop();
  
  const url = new URL(request.url);

  const parsedCookie = cookie.parse(request.headers.get("Cookie") ?? "");
  const token = parsedCookie[TOKEN_KEY];

  if (token) {
    axiosInstance.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
      origin: request.url,
    };
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
    });
    return json({ initialData: data });
  } catch (error) {
    return json({});
  }
};
