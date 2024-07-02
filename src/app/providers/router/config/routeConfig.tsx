import { MainPage } from '@/pages/MainPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RoutePath } from '@/shared/const/router';
import { AppRoutes, AppRoutesProps } from '@/shared/types/router';
import { AboutPage } from '@/pages/AboutPage';
import { HomeIdPage } from '@/pages/HomeIdPage';
import { SettingPage } from '@/pages/SettingPage';
import { LoginPage } from '@/pages/LoginPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.LOGIN]: {
        path: RoutePath.LOGIN(),
        element: <LoginPage />,
        notAuthOnly: true,
        withFooter: true,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.MAIN(),
        element: <MainPage />,
        notAuthOnly: true,
        withFooter: true,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.ABOUT(),
        element: <AboutPage />,
        notAuthOnly: true,
        withFooter: true,
    },
    [AppRoutes.HOME_ID]: {
        path: RoutePath.HOME_ID(':id'),
        authOnly: true,
        withSidebar: true,
        element: <HomeIdPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.SETTINGS(),
        authOnly: true,
        withSidebar: true,
        element: <SettingPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.FORBIDDEN(),
        element: <ForbiddenPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
