import { AppRoutes } from "../types/router";

export const RoutePath: Record<AppRoutes, (...args: Array<string>) => string> = {
    [AppRoutes.MAIN]: () => '/',
    [AppRoutes.LOGIN]: () => '/login',
    [AppRoutes.ABOUT]: () => '/about',
    [AppRoutes.HOME_ID]: (id: string) => `/home/${id}`,
    [AppRoutes.SETTINGS]: () => '/setting',
    [AppRoutes.FORBIDDEN]: () => '/forbidden',
    [AppRoutes.NOT_FOUND]: () => '*',
};
