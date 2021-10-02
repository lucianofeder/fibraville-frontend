import FullContainer from "../../components/FullContainer"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { UseFormRegister, useForm } from "react-hook-form"
import { Form, Container, LeftContainer, ContainerForm, FormTitle, ForgotPassword, RightContainer, NotClient } from "./style"
import Logo from "../../components/Logo"
// import

const LoginPage = () => {
    // const xablau = UseFormRegister
    const {register} = useForm()
    const HandleSubmit = () => {}

    const HandleMyPlans = () => {

    }
    return
    <>
        <Container>
            <FullContainer>
                <LeftContainer>
                    <Logo/>
                    <ContainerForm>
                        <FormTitle>
                            Acesse com seus dados
                        </FormTitle>
                        <Form >
                            <Input register={register} name='CPF/CNPJ' placeholder='CPF/CNPJ' schema="login"/>
                            <Input register={register} name='password' placeholder='senha' schema="login"/>
                            <Button theme='user' onClick={ ()=> HandleSubmit()}>
                                Acessar
                            </Button>
                        </Form>
                        <ForgotPassword to='/'>
                            Esqueceu a senha?
                        </ForgotPassword>
                    </ContainerForm>
                </LeftContainer>
                <RightContainer>
                    <NotClient>
                        <p>não é cliente?</p>
                        <Button children='Confira os planos' theme='mobileCheckPlans' onClick={()=> HandleMyPlans} />
                    </NotClient>
                </RightContainer>
            </FullContainer>
        </Container>
    </>
}

export default LoginPage