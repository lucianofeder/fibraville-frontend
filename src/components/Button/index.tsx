import { ReactNode } from "react";
import { Container } from "./style";

interface ButtonProps {
  children: ReactNode;
  theme: "mobileLogin" | "mobileCheckPlans" | "plans" | "admin" | "user";
  bgColor?: "#44750F" | "#F5B80E" | "#385FF7" | "#E83F6F";
}

const Button = ({ children, theme, bgColor, ...rest }: ButtonProps) => {
  return (
    <>
      <Container type="button" theme={theme} bgColor={bgColor} {...rest}>
        {children}
      </Container>
    </>
  );
};

export default Button;
