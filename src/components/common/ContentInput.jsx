import styled from 'styled-components';

const InputWrapper = styled.div`
    justify-content: center;
    width: 600px; 
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`

const Label = styled.label`
    width: 600px;
    display: flex;
    text-align: left;
    font-size: 20px;
    font-weight: 700;
    padding-left: 5px;
    margin-bottom: 10px;
`

const InputBox = styled.textarea`
    width: 590px;
    height: 130px;
    font-size: 20px;
    font-weight: 400;
    padding-left: 5px;
    border-radius: 4px;
    border: 1px solid #000000;
    
    &:focus {
        border-color: #3e3737;
        border-width: 2px;
        outline: none;
    }

`

const HelperWrapper = styled.div`
    width: 590px;
    height: 30px;
    text-align: left;
    color: #FF0000;
    font-size: 15px;
    font-weight: 400;
    margin-top: 3px;
    word-break: break-all;
`

function ContentInput({name, label, type, value, placeholder, onChange, helperText}) {
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

export default ContentInput;