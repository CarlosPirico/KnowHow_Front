// src/components/atoms/Background/Background.tsx
import React from 'react';
import styled from 'styled-components';

// Definir as propriedades que o Background pode receber
interface BackgroundProps {
  imageUrl: string;
  children: React.ReactNode;
}

// Criando um container estilizado com background dinâmico
const BackgroundContainer = styled.div<BackgroundProps>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.imageUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

// Componente Background reutilizável
const Background: React.FC<BackgroundProps> = ({ imageUrl, children }) => {
  return <BackgroundContainer imageUrl={imageUrl}>{children}</BackgroundContainer>;
};

export default Background;
