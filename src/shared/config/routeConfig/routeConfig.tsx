import { RouteProps } from 'react-router-dom';
import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT',
    NOT_FOUND = 'NOT_FOUND'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.MAIN,
        element: <Main />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.ABOUT,
        element: <About />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.NOT_FOUND,
        element: <NotFoundPage />,
    },
};
