import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
