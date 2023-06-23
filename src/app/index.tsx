import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuthContext } from "@context/AuthProvider";
import { appRoutes, loginRoutes } from "@constants/routes";

const App = () => {
    const { isAuthenticated } = useAuthContext();
    const currentRoutes = useMemo(() => {
        return isAuthenticated ? appRoutes : loginRoutes;
    }, [isAuthenticated]);

    const router = createBrowserRouter(currentRoutes);

    return <RouterProvider router={router} />;
};

export default App;
