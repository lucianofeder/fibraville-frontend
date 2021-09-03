import { ReactNode } from "react";
import { Container } from "./style";

interface FullContainerProps {
  children: ReactNode;
  admin?: boolean;
}

const FullContainer = ({ children, admin = false }: FullContainerProps) => {
  return <Container admin={admin}>{children}</Container>;
};

export default FullContainer;
