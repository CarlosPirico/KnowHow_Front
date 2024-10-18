import styled from 'styled-components';
import InputSimple from '../atoms/Input';
import { ArrowRight } from '../atoms/Icon';

const PasswordInput = (placeHolder: string) => {
    return (
        <InputContainer>
            {InputSimple(placeHolder, 'password')}
            <LockIconContainer href="/home">
                {ArrowRight()}
            </LockIconContainer>
        </InputContainer>
    )
}


const InputContainer = styled.div`
  position: relative;
  margin-bottom: 6px
`;

const LockIconContainer = styled.a`
  position: absolute;
  top: 5%;
  right: 8%;
  padding: 10px;
  border-radius: 25px;
  height: 21px;
  width: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PasswordInput;