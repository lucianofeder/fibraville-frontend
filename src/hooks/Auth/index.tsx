import { createContext, useContext, ReactNode } from "react";

interface AuthData {
  token: string;
}

interface AuthProviderProps {
  children: ReactNode;
}
// @TODO: tudo kk precisei passar um token pra não dar erro nas rotas
const AuthContext = createContext<AuthData>({} as AuthData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const token = "";
  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
