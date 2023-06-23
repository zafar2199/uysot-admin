import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "@context/AuthProvider";
import QueryProvider from "@context/QueryProvider";
import AntDesignProvider from "@context/AntDesignProvider";
import App from "./app/index";

import "@styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AntDesignProvider>
            <AuthProvider>
                <QueryProvider>
                    <App />
                </QueryProvider>
            </AuthProvider>
        </AntDesignProvider>
    </React.StrictMode>
);
