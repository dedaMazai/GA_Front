import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    notAuthOnly?: boolean;
    withSidebar?: boolean;
    withFooter?: boolean;
};

export enum AppRoutes {
    MAIN = 'MAIN',
    LOGIN = 'LOGIN',
    ABOUT = 'ABOUT',
    HOME_ID = 'HOME_ID',
    SETTINGS = 'SETTINGS',
    FORBIDDEN = 'FORBIDDEN',
    // last
    NOT_FOUND = 'NOT_FOUND',
}