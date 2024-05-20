import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';

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

    return (
        <LoginWrapper>
            <h1>로그인</h1>
            <Input
                name='member-email'
                label='이메일'
                type='email'
                placeholder='이메일을 입력하세요'
                helperText='* helper text'
            />
            <Input
                name='member-password'
                label='비밀번호'
                type='password'
                placeholder='비밀번호를 입력하세요'
                helperText='* helper text'
            />
            <ButtonWrapper>
                <Button
                    buttonName="로그인"
                    buttonStyle="LongButton"
                    isDisabled="false"
                />
                <LinkStyle to="/signup">회원가입</LinkStyle>
            </ButtonWrapper>
        </LoginWrapper>
    )
}

export default LoginForm;