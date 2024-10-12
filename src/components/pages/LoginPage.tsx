// src/components/pages/LoginPage.tsx
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg'; // Substitua com seu SVG
import InputSimple from '../atoms/Input';

const LoginPage = () => {
    return (
        <LoginContainer>
            <Title>Login</Title>
            <InputContainer>
              {InputSimple('RA')}
            </InputContainer>
            <InputContainer>
              {InputSimple("SENHA")}
              <LockIconContainer>
                  <LockIcon width={20} height={20} />
              </LockIconContainer>
            </InputContainer>
            <ForgotPasswordLink href="#">Recuperar senha.</ForgotPasswordLink>
        </LoginContainer>
    );
};

export default LoginPage;

// Styled Components
const LoginContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const LockIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const ForgotPasswordLink = styled.a`
  font-size: 14px;
  color: #888;
  text-decoration: none;
`;
