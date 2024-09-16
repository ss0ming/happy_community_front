import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, message } from 'antd';
import Input from '../common/Input';
import useInput from '../../hooks/useInput';



const LoginWrapper = styled.div`
    text-align: center;
    background-color: #FBF6F0;
    height: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 80PX;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FullWidthButton = styled(Button)`
    width: 400px;
    height: 40px;
    font-size: 25px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    color: #000000;
    margin-top: 10px;
`;

const InputWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
`;

function requestLogin(email, password) {
    return fetch(`http://localhost:8080/api/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then((response) => {
        return response.json().then(result => ({
            status: response.status, 
            ok: response.ok, 
            result: result
        }));
    })
    .then(({ status, ok, result }) => {
        if (ok) {
            message.success('로그인 성공!');
            localStorage.setItem('Access Token', result.data.token);
        } else {
            message.error(`로그인 실패: ${result.message} (상태 코드: ${status})`);
        }
        return result;
    })
    .catch(error => {
        console.error('Error during login:', error);
        message.error('로그인 요청 중 오류가 발생했습니다.');
        throw error;
    });
}

function LoginForm() {
    const validateEmail = (email) => {
        const idRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
        let helperText = '';

        if (!email) {
            helperText = '* 이메일을 입력해주세요';
        } else if(!idRegExp.test(email)) {
            helperText = '* 올바른 이메일 주소 형식을 입력해주세요 (예: example@example.com)';
        }

        return helperText;
    };

    const validatePassword = (password) => {
        const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,20}$/;
        let helperText = '';

        if (!password) {
            helperText = '* 비밀번호를 입력해주세요';
        } else if (!pwRegExp.test(password)) {
            helperText = '* 비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.';
        }
        
        return helperText;
    };

    const email = useInput('', validateEmail);
    const password = useInput('', validatePassword);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        setIsButtonDisabled(!!email.helperText || !!password.helperText);
    }, [email.helperText, password.helperText]);

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!isButtonDisabled) {
            await requestLogin(email.value, password.value);
        }
    };

    return (
        <LoginWrapper>
            <h1>로그인</h1>
            <InputWrapper>
                <Input
                    name='member-email'
                    label='이메일'
                    type='email'
                    value={email.value}
                    placeholder='이메일을 입력하세요'
                    onChange={email.handler}
                    helperText={email.helperText}
                />
            </InputWrapper>
            <InputWrapper>
                <Input
                    name='member-password'
                    label='비밀번호'
                    type='password'
                    value={password.value}
                    placeholder='비밀번호를 입력하세요'
                    onChange={password.handler}
                    helperText={password.helperText}
                />
            </InputWrapper>
            <ButtonWrapper>
                <FullWidthButton
                    type="primary"
                    onClick={handleLogin}
                >
                    로그인
                </FullWidthButton>
                <StyledLink to="/members/signup">회원가입</StyledLink>
            </ButtonWrapper>
        </LoginWrapper>
    );
}

export default LoginForm;
