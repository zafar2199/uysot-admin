import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes, loginRoutes } from "@constants/routes";
import { useAuthContext } from "@context/AuthProvider";

const App = () => {
    const { isAuthenticated } = useAuthContext();
    const currentRoutes = useMemo(() => {
        return isAuthenticated ? appRoutes : loginRoutes;
    }, [isAuthenticated]);

    const router = createBrowserRouter(currentRoutes);

    return <RouterProvider router={router} />;
};

export default App;
