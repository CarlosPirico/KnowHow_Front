// src/components/pages/LoginPage.tsx
import styled from 'styled-components';
import InputSimple from '../atoms/Input';
import PasswordInput from '../molecules/PasswordInput';
import TitleSimple from '../atoms/Title';
import { typographyPoppins } from '../../styles/typography';
import Background from '../atoms/Background';

const LoginPage = () => {
    return (
      <Background imageUrl="/images/background.jpg">
        <Page>
          <LoginContainer>
              {TitleSimple('Login')}
              <InputContainer>
                {InputSimple('RA')}
              </InputContainer>
              {PasswordInput('SENHA')}
              <ForgotPasswordLink href="#">Recuperar senha.</ForgotPasswordLink>
          </LoginContainer>
        </Page>
      </Background>
    );
};

export default LoginPage;

// Styled Components

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;
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

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 7px;
`;

const ForgotPasswordLink = styled.a`
  font-size: ${typographyPoppins.fontSizes.micro};
  font-weight: ${typographyPoppins.fontWeights.regular};
  color: #B0B0B0;
`;
