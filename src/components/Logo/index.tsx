import logo from "../../assets/img/logo.png";
import blueLogo from "../../assets/img/logo-blue.png";

interface LogoProps {
  width?: string;
  height?: string;
  blue?: boolean;
}

const Logo = ({ width, height, blue = false }: LogoProps) => {
  return (
    <img
      src={blue ? blueLogo : logo}
      width={width}
      height={height}
      alt="Fibraville"
    />
  );
};

export default Logo;
