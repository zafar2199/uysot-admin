import React from "react";
import ReactDOM from "react-dom/client";
import AntDesignProvider from "@context/AntDesignProvider";
import QueryProvider from "@context/QueryProvider";
import App from "./app/index";

import "@styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AntDesignProvider>
            <QueryProvider>
                <App />
            </QueryProvider>
        </AntDesignProvider>
    </React.StrictMode>
);
