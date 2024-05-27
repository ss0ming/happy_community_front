import styled from 'styled-components';

const InputWrapper = styled.div`
    justify-content: center;
    width: 392px; 
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`

const Label = styled.label`
    width: 355px;
    display: flex;
    text-align: left;
    font-size: 15px;
    font-weight: 700;
    padding-left: 5px;
    margin-bottom: 10px;
`

const InputBox = styled.input`
    width: 355px;
    height: 33px;
    font-size: 14px;
    font-weight: 400;
    padding-left: 5px;
    border-radius: 4px;
    border: 1px solid #000000;
`

const HelperWrapper = styled.div`
    width: 355px;
    height: 30px;
    text-align: left;
    color: #FF0000;
    font-size: 12px;
    font-weight: 400;
    margin-top: 3px;
    word-break: break-all;
`

function Input({name, label, type, value, placeholder, onChange, helperText}) {
    return (
        <InputWrapper>
            <Label htmlFor={name}>{label}</Label>
            <InputBox
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                //onBlur={onBlur}
            />
            <HelperWrapper>{helperText}</HelperWrapper>
        </InputWrapper>
    )
}

export default Input;