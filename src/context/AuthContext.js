import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [authUser, setAuthUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}
