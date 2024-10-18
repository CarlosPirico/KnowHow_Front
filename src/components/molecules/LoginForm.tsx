import InputSimple from '../atoms/Input';
import PasswordInput from '../molecules/PasswordInput';
import TitleSimple from '../atoms/Title';
import { typographyPoppins } from '../../styles/typography';
import styled from 'styled-components';

export const LoginForm = () => (
    <LoginContainer>
        {TitleSimple('Login')}
        <InputContainer>
        {InputSimple('RA')}
        </InputContainer>
        {PasswordInput('SENHA')}
        <ForgotPasswordLink href="#">Recuperar senha.</ForgotPasswordLink>
    </LoginContainer>
);

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 7px;
`;

const ForgotPasswordLink = styled.a`
  font-size: ${typographyPoppins.fontSizes.micro};
  font-weight: ${typographyPoppins.fontWeights.regular};
  color: #B0B0B0;
`;

const LoginContainer = styled.div`
    background-color: #fff;
    border-radius: 24px 24px 0 0;
    padding: 20px 0 40px 0;
    width: 100%;
    text-align: center;
    margin: auto auto;
    border: 1px solid #E9E9E9;
    border-top-width: 4px;
`;
