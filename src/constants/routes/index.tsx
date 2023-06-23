import { Navigate } from "react-router-dom";
import Root from "@components/Root";
import LoginPage from "@pages/LoginPage";
import ComplexPage from "@pages/ComplexPage";

import { IAppRoutes, TRoutes } from "./types";

const appRoutes: IAppRoutes[] = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/complex",
                element: <ComplexPage />,
            },
        ],
    },
    {
        path: "login",
        element: <Navigate to="/" replace />,
    },
];

const loginRoutes: TRoutes[] = [
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <Navigate to="/login" replace />,
    },
];

export { appRoutes, loginRoutes };
