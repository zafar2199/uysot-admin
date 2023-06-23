import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/index";

import "@styles/main.scss";
import AntDesignProvider from "@context/AntDesignProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AntDesignProvider>
            <App />
        </AntDesignProvider>
    </React.StrictMode>
);
