import { ReactNode } from "react";

interface IAuthContextData {
    logout: () => void;
    isAuthenticated: boolean;
    setTokenAuth: (value: React.SetStateAction<boolean>) => void;
}

interface IAuthProviderProps {
    children: ReactNode;
}

export type { IAuthContextData, IAuthProviderProps };
