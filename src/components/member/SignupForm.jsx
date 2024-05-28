import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../common/Input';
import Button from '../common/Button';
import useInput from '../../hooks/useInput';

const SignupWrapper = styled.div`
    text-align: center;
`

const ProfileWrapper = styled.div`
    justify-content: center;
    width: 392px; 
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`

const ProfileLabel = styled.p`
    width: 355px;
    display: flex;
    text-align: left;
    font-size: 15px;
    font-weight: 700;
    padding-left: 5px;
    margin-bottom: 10px;
`

const ProfileImg = styled.div`
    font-size: 24px;
    border: 0;
    width: 149px;
    height: 149px;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 50%;
    background-color: #C4C4C4;
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

function SignupForm() {

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

    // 비밀번호 확인 유효성 검사
    const validatePwCheck = (pwCheck, password) => {
        let helperText = '';

        if (!pwCheck) {
            helperText = '* 비밀번호를 한번더 입력해주세요';
        } else if (pwCheck !== password) {
            helperText = '* 비밀번호가 일치하지 않습니다';
        }

        return helperText;
    }
    
    // 닉네임 유효성 검사
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
    }

    // input - 이메일, 비밀번호
    const email = useInput('', validateEmail);
    const password = useInput('', validatePassword);
    const pwCheck = useInput('',  validatePwCheck, password.value);
    const nickname = useInput('', validateNickname);

    // 버튼 상태
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const disableButton = !email.value || !password.value || !pwCheck.value || !nickname.value ||
                              !!email.helperText || !!password.helperText || !!pwCheck.helperText || !!nickname.helperText;
        setIsButtonDisabled(disableButton);
    }, [email.value, email.helperText, password.value, password.helperText, pwCheck.value, pwCheck.helperText, nickname.value, nickname.helperText]);

    const handleSignup = async (event) => {
        // TODO: 회원가입 처리 로직
    }

    return (
        <SignupWrapper>
            <h1>회원가입</h1>
            <ProfileWrapper>
                <ProfileLabel>프로필*</ProfileLabel>
                <ProfileImg>+</ProfileImg>
            </ProfileWrapper>
            <Input
                name='member-email'
                label='이메일*'
                type='email'
                value={email.value}
                placeholder='이메일을 입력하세요'
                onChange={email.handler}
                helperText={email.helperText}
            />
            <Input
                name='member-password'
                label='비밀번호*'
                type='password'
                value={password.value}
                placeholder='비밀번호를 입력하세요'
                onChange={password.handler}
                helperText={password.helperText}
            />
            <Input
                name='member-pw-check'
                label='비밀번호 확인*'
                type='password'
                value={pwCheck.value}
                placeholder='비밀번호를 한번 더 입력하세요'
                onChange={pwCheck.handler}
                helperText={pwCheck.helperText}
            />
            <Input
                name='member-nickname'
                label='닉네임*'
                value={nickname.value}
                placeholder='닉네임을 입력하세요'
                onChange={nickname.handler}
                helperText={nickname.helperText}
            />
            <ButtonWrapper>
                <Button
                    buttonName="회원가입"
                    buttonStyle="LongButton"
                    isDisabled={isButtonDisabled}
                    action={handleSignup}
                />
                <LinkStyle to="/member/login">로그인하러 가기</LinkStyle>
            </ButtonWrapper>
        </SignupWrapper>
    )
}

export default SignupForm;