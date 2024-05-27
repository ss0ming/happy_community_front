import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';

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

function SignupForm() {
    return (
        <div>
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
                    placeholder='이메일을 입력하세요'
                    helperText='* helpre text'
                />
                <Input
                    name='member-password'
                    label='비밀번호*'
                    type='password'
                    placeholder='비밀번호를 입력하세요'
                    helperText='* helpre text'
                />
                <Input
                    name='member-pw-check'
                    label='비밀번호 확인*'
                    type='password'
                    placeholder='비밀번호를 한번 더 입력하세요'
                    helperText='* helpre text'
                />
                <Input
                    name='member-nickname'
                    label='닉네임*'
                    placeholder='닉네임을 입력하세요'
                    helperText='* helpre text'
                />
            </SignupWrapper>

        </div>
    )
}

export default SignupForm;