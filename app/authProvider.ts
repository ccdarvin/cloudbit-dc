import { AuthBindings } from "@refinedev/core";
import Cookies from "js-cookie";
import * as cookie from "cookie";
import { TOKEN_KEY, API_URL } from "./constants";
import { AuthHelper } from "@refinedev/strapi-v4";
import axios from "axios";


export const axiosInstance = axios.create();
const strapiAuthHelper = AuthHelper(API_URL + "/api");


export const authProvider: AuthBindings = {
    login: async ({ email, password }) => {
        const { data, status } = await strapiAuthHelper.login(
            email,
            password,
        );
        if (status === 200) {
            // save token to cookie with access to all subdomains
            Cookies.set(TOKEN_KEY, data.jwt, {
                path: "/",
                domain: window.location.hostname,
            });
            // set header axios instance
            axiosInstance.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${data.jwt}`;

            return {
                success: true,
                redirectTo: "/",
            };
        }
        return {
            success: false,
            error: new Error("Invalid email or password"),
        };
    },
    logout: async () => {
        // remove token from cookie
        Cookies.remove(TOKEN_KEY, {
            path: "/",
            domain: window.location.hostname,
        });
        console.log("logout", Cookies.get(TOKEN_KEY));
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    onError: async (error) => {
        if (error && error.statusCode === 401) {
            return {
                error: new Error("Unauthorized"),
                logout: true,
                redirectTo: "/login",
            };
        }

        return {};
    },
    check: async (request) => {
        console.log("check", Cookies.get(TOKEN_KEY));
        let token = undefined;
        if (request) {
            const hasCookie = request.headers.get("Cookie");
            if (hasCookie) {
                const parsedCookie = cookie.parse(
                    request.headers.get("Cookie"),
                );
                token = parsedCookie[TOKEN_KEY];
            }
        } else {
            const parsedCookie = Cookies.get(TOKEN_KEY);
            token = parsedCookie ? JSON.parse(parsedCookie) : undefined;
        }

        const { pathname } = new URL(request.url);

        const query =
            pathname === "/" ? "" : `?to=${encodeURIComponent(pathname)}`;

        if (!token) {
            return {
                authenticated: false,
                error: new Error("Unauthorized"),
                logout: true,
                redirectTo: `/login${query}`,
            };
        }

        axiosInstance.defaults.headers.common = {
            Authorization: `Bearer ${token}`,
        }
        return {
            authenticated: true,
        }
    },
    getPermissions: async () => {
        return null;
    },
    getIdentity: async () => {
        const token = Cookies.get(TOKEN_KEY);
        if (!token) {
            return null;
        }

        const { data, status } = await strapiAuthHelper.me(token);
        if (status === 200) {
            const { id, username, email } = data;
            return {
                id,
                username,
                email,
            };
        }

        return null;
    },
};




