// src/components/atoms/Button.tsx
import React from 'react';
import styled from 'styled-components';

// Estilo do botão
const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// Definição dos tipos
interface ButtonProps {
    children: React.ReactNode;  // Tipo correto para "children"
    onClick?: React.MouseEventHandler<HTMLButtonElement>;  // Tipo do "onClick"
}

// Componente Button
export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};