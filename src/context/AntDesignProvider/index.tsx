import { FC } from "react";
import { ConfigProvider, ThemeConfig } from "antd";
import { AntDesignProviderProps } from "./types";

const config: ThemeConfig = {
    token: {
        colorPrimary: "#6021a3",
        borderRadius: 5,
    },
};

const AntDesignProvider: FC<AntDesignProviderProps> = ({ children }) => {
    return <ConfigProvider theme={config}>{children}</ConfigProvider>;
};

export default AntDesignProvider;
