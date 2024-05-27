import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import useInput from '../../hooks/useInput';

const LoginWrapper = styled.div`
    text-align: center;
`

const ButtonWrapper = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const LinkStyle = styled(Link)`
    text-decoration: none;
    font-size 14px; 
    font-weight: 400;
    color: #000000;
    margin-top: 10px;
`

function LoginForm() {

    // 이메일 유효성 검사
    const validateEmail = (email) => {
        const idRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
        let helperText = '';

        if (!email) {
            helperText = '* 이메일을 입력해주세요';
        } else if(!idRegExp.test(email)) {
            helperText = '* 올바른 이메일 주소 형식을 입력해주세요 (예: example@example.com)';
        }

        return helperText;
    }

    // 비밀번호 유효성 검사
    const validatePassword = (password) => {
        const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,20}$/;
        let helperText = '';

        if (!password) {
            helperText = '* 비밀번호를 입력해주세요';
        } else if (!pwRegExp.test(password)) {
            helperText = '* 비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.';
        }
        
        return helperText;
    }

    // input - 이메일, 비밀번호
    const email = useInput('', validateEmail);
    const password = useInput('', validatePassword)

    // 버튼 상태
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (!!(email.value && password.value)) {
            setIsButtonDisabled(!!email.helperText || !!password.helperText);
        }
    }, [email, password]);

    const handleLogin = async (event) => {
        // TODO: 로그인 처리 로직
    }

    return (
        <LoginWrapper>
            <h1>로그인</h1>
            <Input
                name='member-email'
                label='이메일'
                type='email'
                value={email.value}
                placeholder='이메일을 입력하세요'
                onChange={email.handler}
                helperText={email.helperText}
            />
            <Input
                name='member-password'
                label='비밀번호'
                type='password'
                value={password.value}
                placeholder='비밀번호를 입력하세요'
                onChange={password.handler}
                helperText={password.helperText}
            />
            <ButtonWrapper>
                <Button
                    buttonName="로그인"
                    buttonStyle="LongButton"
                    isDisabled={isButtonDisabled}
                    action={handleLogin}
                />
                <LinkStyle to="/signup">회원가입</LinkStyle>
            </ButtonWrapper>
        </LoginWrapper>
    )
}

export default LoginForm;