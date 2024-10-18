import React from 'react';
import styled from 'styled-components';

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

export const Button = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);