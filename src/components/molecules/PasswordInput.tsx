import styled from 'styled-components';
import InputSimple from '../atoms/Input';
import { Icon } from '../atoms/Icon';

const PasswordInput = (placeHolder: string) => {
    return (
        <InputContainer>
            {InputSimple(placeHolder, 'password')}
            <LockIconContainer>
                {Icon()}
            </LockIconContainer>
        </InputContainer>
    )
}


const InputContainer = styled.div`
  position: relative;
  margin-bottom: 6px
`;

const LockIconContainer = styled.div`
  position: absolute;
  top: 29%;
  right: 8%;
`;

export default PasswordInput;