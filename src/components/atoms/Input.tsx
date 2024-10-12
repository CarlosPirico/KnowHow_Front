import React from 'react';
import styled from 'styled-components';
import { typographyPoppins } from '../../styles/typography';

const Input = styled.input`
    width: 90%;
    padding: 10px;
    border: 2px solid #eaeaea;
    border-radius: 50px;
    font-size: 16px;
    outline: none;
    color: #333;
`;

const InputSimple = (placeHolder: string) => {
    return <Input type="text" placeholder={placeHolder} />;
};


export default InputSimple;