import { Navigate } from "react-router-dom";
import Root from "@components/Root";
import LoginPage from "@pages/LoginPage";
import ComplexPage from "@pages/ComplexPage";

import { IAppRoutes, TRoutes } from "./types";
import JournalPage from "@pages/JournalPage/indesx";
import BuilderPage from "@pages/BuildersPage";

const appRoutes: IAppRoutes[] = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <ComplexPage />,
            },
            {
                path: "/journal",
                element: <JournalPage />,
            },
            {
                path: "/builder",
                element: <BuilderPage />,
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
