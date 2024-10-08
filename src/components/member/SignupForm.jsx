import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../common/Input';
import { Button, message } from 'antd';
import useInput from '../../hooks/useInput';

const SignupWrapper = styled.div`
    text-align: center;
    background-color: #FBF6F0;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 80PX;
`;

const ButtonWrapper = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
`;

const FullWidthButton = styled(Button)`
    width: 400px;
    height: 40px;
    font-size: 25px;
`;

const LinkStyle = styled(Link)`
    text-decoration: none;
    font-size 20px; 
    font-weight: 400;
    color: #000000;
    margin-top: 10px;
`;

const InputWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
`;

async function requestSignup(email, password, passwordConfirm, nickname) {
    try {
        const response = await fetch(`http://localhost:8080/api/user/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                passwordConfirm,
                nickname,
            }),
        });
        const result_1 = await response.json();
        console.log(result_1);
        return result_1;
    } catch (error) {
        console.error('Error during signup:', error);
        throw error;
    }
}

function SignupForm() {
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const idRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
        let helperText = '';

        if (!email) {
            helperText = '* 이메일을 입력해주세요';
        } else if (!idRegExp.test(email)) {
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

    const validatePwCheck = (pwCheck, password) => {
        let helperText = '';

        if (!pwCheck) {
            helperText = '* 비밀번호를 한번 더 입력해주세요';
        } else if (pwCheck !== password) {
            helperText = '* 비밀번호가 일치하지 않습니다';
        }

        return helperText;
    };

    const validateNickname = (nickname) => {
        const nicknameRegExp = /[\s]/g;
        let helperText = '';

        if (!nickname) {
            helperText = '* 닉네임을 입력해주세요.';
        } else if (nicknameRegExp.test(nickname)) {
            helperText = '* 띄어쓰기를 없애주세요.';
        } else if (nickname.length > 10) {
            helperText = '* 닉네임은 최대 10자까지 가능합니다.';
        }

        return helperText;
    };

    const email = useInput('', validateEmail);
    const password = useInput('', validatePassword);
    const pwCheck = useInput('', validatePwCheck, password.value);
    const nickname = useInput('', validateNickname);

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const disableButton = !email.value || !password.value || !pwCheck.value || !nickname.value ||
                              !!email.helperText || !!password.helperText || !!pwCheck.helperText || !!nickname.helperText;
        setIsButtonDisabled(disableButton);
    }, [email.value, email.helperText, password.value, password.helperText, pwCheck.value, pwCheck.helperText, nickname.value, nickname.helperText]);

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const result = await requestSignup(email.value, password.value, pwCheck.value, nickname.value);
            console.log('Signup successful:', result);
            message.success('회원가입 성공')
            navigate('/members/login');
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <SignupWrapper>
            <h1>회원가입</h1>
            <Input
                name='member-email'
                label='이메일*'
                type='email'
                value={email.value}
                placeholder='이메일을 입력하세요'
                onChange={email.handler}
                helperText={email.helperText}
            />
            <InputWrapper>
                <Input
                    name='member-password'
                    label='비밀번호*'
                    type='password'
                    value={password.value}
                    placeholder='비밀번호를 입력하세요'
                    onChange={password.handler}
                    helperText={password.helperText}
                />
            </InputWrapper>
            <InputWrapper>
                <Input
                    name='member-pw-check'
                    label='비밀번호 확인*'
                    type='password'
                    value={pwCheck.value}
                    placeholder='비밀번호를 한번 더 입력하세요'
                    onChange={pwCheck.handler}
                    helperText={pwCheck.helperText}
                />
            </InputWrapper>
            <InputWrapper>
                <Input
                    name='member-nickname'
                    label='닉네임*'
                    value={nickname.value}
                    placeholder='닉네임을 입력하세요'
                    onChange={nickname.handler}
                    helperText={nickname.helperText}
                />
            </InputWrapper>
            <ButtonWrapper>
                <FullWidthButton
                    type='primary'
                    onClick={handleSignup}
                    disabled={isButtonDisabled}
                >
                    회원가입
                </FullWidthButton>
                <LinkStyle to="/members/login">로그인하러 가기</LinkStyle>
            </ButtonWrapper>
        </SignupWrapper>
    );
}

export default SignupForm;
