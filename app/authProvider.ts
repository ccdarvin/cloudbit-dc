import { AuthHelper, DataProvider } from "@pankod/refine-strapi-v4";
import { checkAuthentication } from "@pankod/refine-remix-router";
import { AuthProvider } from "@pankod/refine-core";
import { TOKEN_KEY, API_URL } from "~/constants";
import * as cookie from "cookie";
import Cookies from "js-cookie";
import axios from "axios";

export const axiosInstance = axios.create();
const strapiAuthHelper = AuthHelper(API_URL + "/api");

export const getAxiosInstance = (request: any) => {
  const parsedCookie = cookie.parse(request.headers.get("Cookie") ?? "")
  const token = parsedCookie[TOKEN_KEY]
  if (token) {
    axiosInstance.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }
  return axiosInstance
}

export const authProvider: AuthProvider = {
  login: async ({ email: username, password }) => {
    const { data, status } = await strapiAuthHelper.login(username, password);
    if (status === 200) {
      Cookies.set(TOKEN_KEY, data.jwt);

      // set header axios instance
      axiosInstance.defaults.headers.common = {
        Authorization: `Bearer ${data.jwt}`,
      };

      return Promise.resolve();
    }
    return Promise.reject();
  },
  logout: () => {
    Cookies.remove(TOKEN_KEY);
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: (context) => {
    let token = undefined;
    if (context) {
      const { request } = context;
      const parsedCookie = cookie.parse(request.headers.get("Cookie") ?? "");
      token = parsedCookie[TOKEN_KEY];
    } else {
      const parsedCookie = Cookies.get(TOKEN_KEY);
      token = parsedCookie;
    }

    if (token) {
      axiosInstance.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      };
      return Promise.resolve();
    }

    return Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
  getUserIdentity: async () => {
    const token = Cookies.get(TOKEN_KEY);

    if (!token) {
      return Promise.reject();
    }

    const { data, status } = await strapiAuthHelper.me(token);
    if (status === 200) {
      const { id, username, email } = data;
      return Promise.resolve({
        id,
        username,
        email,
      });
    }

    return Promise.reject();
  },
};
