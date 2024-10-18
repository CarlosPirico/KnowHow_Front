import { Button } from '../atoms/Button';
import styled from 'styled-components';
import Background from '../atoms/Background';

export const LoginOption = (login: (() => void) | undefined, register: (() => void) | undefined) => (
  <Page>
    <Compent1>
      <Background imageUrl="/images/background.png">
      </Background>
    </Compent1>
    <Compent2>
      <LoginContainer>
        <p>Bem-vindo ao aplicativo!</p>
        <Button onClick={login}>Login</Button>
        <Button onClick={register}>Cadastro</Button>
      </LoginContainer>
    </Compent2>
  </Page>
);

const LoginContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  text-align: center;
  margin: auto auto;
`;

const Page = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Compent1 = styled.div`
    width: 100%;
    height: 70%;
`

const Compent2 = styled.div`
    width: 100%;
    height: 30%;
`

export default LoginOption;
