import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const baseAuthState = { isLoggedIn: false, user: null, isLoading: true };

const AuthContext = createContext(baseAuthState);

export const AuthProvider = ({ children }) => {
    const [ctx, setCtx] = useState(baseAuthState);
    
    
    useEffect(() => {
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setCtx({
            isLoggedIn: !!user,
            user: user,
            isLoading: false,
            })
        });
        return () => unsubscribe();
    }, []);
  
    return (
      <AuthContext.Provider value={ctx}>
        {children}
      </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);