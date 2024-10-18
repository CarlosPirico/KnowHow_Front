// src/components/molecules/Modal.tsx
import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// Estilos para o modal e o backdrop (fundo semi-transparente)
const Backdrop = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1001;
`;

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Backdrop isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        {children}
        {/* <button onClick={onClose}>Fechar</button> */}
      </ModalContainer>
    </Backdrop>
  );
};
