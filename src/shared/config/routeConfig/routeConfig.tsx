import {RouteProps} from "react-router-dom";
import Main from "pages/Main/ui/Main";
import About from "pages/About/ui/About";

export enum AppRoutes {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.MAIN,
        element: <Main/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.ABOUT,
        element: <About/>
    }
}

