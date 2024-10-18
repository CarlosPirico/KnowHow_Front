import InputSimple from '../atoms/Input';
import { Button } from '../atoms/Button';
import styled from 'styled-components';

export const RegisterForm = () => (
  <LoginContainer>
    {InputSimple("Nome")}
    {InputSimple("Email")}
    {InputSimple("Senha","password")}
    {InputSimple("","file")}
    <Button onClick={() => console.log('Cadastrando...')}>Cadastrar</Button>
  </LoginContainer>
);

const LoginContainer = styled.div`
    background-color: #fff;
    border-radius: 24px;
    padding: 20px;
    width: 300px;
    text-align: center;
    margin: auto auto;
    border: 1px solid #E9E9E9;
    border-top-width: 4px;
`;
