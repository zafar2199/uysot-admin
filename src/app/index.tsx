import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes, loginRoutes } from "@constants/routes";

const App = () => {
    const USER = false;
    const currentRoutes = useMemo(() => {
        return USER ? appRoutes : loginRoutes;
    }, [USER]);

    const router = createBrowserRouter(currentRoutes);

    return <RouterProvider router={router} />;
};

export default App;
