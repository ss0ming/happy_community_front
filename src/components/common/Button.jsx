import styled from 'styled-components';

const BigButton = styled.button`
    background-color: #ACA0EB;
    width: 138px;
    height: 39px;
    border: 0;
    border-radius: 16px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
`

const SmallButton = styled.button`
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    width: 50px;
    height: 27px;
    border-radius: 8px;
    border: 1px solid #ACA0EB;
    margin-left: 5px;
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