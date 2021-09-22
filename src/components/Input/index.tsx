import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";
import { Container, InputContainer } from "./style";

interface InputProps {
  name: string;
  label?: string;
  icon?: IconType;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldError | null;
  schema: "login" | "register";
}

const Input = ({
  name,
  label,
  icon: Icon,
  placeholder,
  register,
  error = null,
  schema,
  ...rest
}: InputProps) => {
  return (
    <Container schema={schema}>
      <div>{label}</div>

      <InputContainer schema={schema}>
        {Icon && <Icon size={25} />}
        <input {...register(name)} {...rest} placeholder={placeholder} />
      </InputContainer>

      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
