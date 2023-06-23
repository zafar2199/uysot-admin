import { FC, useState, useContext, useCallback, createContext } from "react";
import { IAuthContextData, IAuthProviderProps } from "./types";
import { useGetList } from "@hooks/request";
import { authLogidinUrl } from "@constants/urls";

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState(false);

    const { data } = useGetList("auth", authLogidinUrl);

    const handleLogout = useCallback(() => {
        setUser(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: user,
                logout: handleLogout,
                setTokenAuth: setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
