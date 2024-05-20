import styled from 'styled-components';

const BigButton = styled.button`

`

const SmallButton = styled.button`

`

const LongButton = styled.button`
    width: 355px;
    height: 33px;
    background-color: #7F6AEE;
    border-radius: 4px;
    border: 0;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;

    &:disabled{
        background-color: #ACA0EB;
    };
`

const buttonStyles = {
    BigButton,
    SmallButton,
    LongButton,
};

function Button({ buttonName, buttonStyle, isDisabled, action }) {
    const ButtonComponent = buttonStyles[buttonStyle];
    
    return (
        <ButtonComponent
            onClick = {action}
            disabled = {isDisabled}
        >
        {buttonName}
        </ButtonComponent>
    )
}

export default Button;