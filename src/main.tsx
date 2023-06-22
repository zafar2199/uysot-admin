import React from "react";
import ReactDOM from "react-dom/client";
import { LoginPage } from "@pages/index";

import "@styles/main.scss";
import AntDesignProvider from "@context/AntDesignProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AntDesignProvider>
            <LoginPage />
        </AntDesignProvider>
    </React.StrictMode>
);
