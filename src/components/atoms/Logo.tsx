// src/components/atoms/Logo.tsx
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 200px;
  height: auto;
`;

export const Logo = ({ src }: { src: string }) => {
    return (
        <Page>
            <LogoImage src={src} alt="Logo" />
        </Page>
    )
};

const Page = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`