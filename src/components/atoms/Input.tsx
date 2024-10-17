import React from 'react';
import styled from 'styled-components';
import { typographyPoppins } from '../../styles/typography';

const Input = styled.input`
    width: 90%;
    padding: 14px;
    border: 1px solid #D9D9D9;
    border-radius: 50px;
    font-size: ${typographyPoppins.fontSizes.small};
    font-weight: ${typographyPoppins.fontWeights.bold};
    outline: none;
    color: #B3B3B3;
    &::placeholder {
        color: #B3B3B3;
    }
`;

const InputSimple = (placeHolder: string = "input", typeInput: string = 'text') => {
    return <Input type={typeInput} placeholder={placeHolder} />;
};


export default InputSimple;