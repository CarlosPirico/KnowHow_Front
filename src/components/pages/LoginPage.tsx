// src/components/pages/LoginPage.tsx
import { useState, useEffect } from 'react';
import { Logo } from '../atoms/Logo';
import { RegisterForm } from '../molecules/RegisterForm';
import { LoginForm } from '../molecules/LoginForm';
import LoginOption from '../molecules/LoginOption';
import styled from 'styled-components';
import { Modal } from '../molecules/Modal';

const LoginPage = () => {
  const [screen, setScreen] = useState<'logo' | 'options' | 'login' | 'register'>('logo');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    const timer = setTimeout(() => setScreen('options'), 3000); // Transição após 3 segundos
    return () => clearTimeout(timer);
  }, []);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <Page>
      {screen === 'logo' && <Logo src="/images/logoKnowHow.png" />} {/* Exibe a logo */}
      {screen === 'options' && LoginOption(() => openModal(<LoginForm />),() => openModal(<RegisterForm />))}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
    </Page>
  );
};

const Page = styled.div`
    width: 100%;
    height: 100%;
`

export default LoginPage;