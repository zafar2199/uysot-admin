import { ReactNode } from "react";

type TRoutes = {
    path: string;
    element: ReactNode;
};

interface IAppRoutes {
    path: string;
    element: ReactNode;
    children?: TRoutes[];
}

export type { TRoutes, IAppRoutes };
