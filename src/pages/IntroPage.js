import styled from 'styled-components';
import { Button } from 'antd';
import useCustomMove from "../hooks/useCustomMove";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 100px;
    font-weight: bold;
    color: #333;
    margin-bottom: 50px;
`;

const Description = styled.p`
    font-size: 40px;
    color: #555;
    margin-bottom: 40px;
    background-color: #FFECCC;
`;

const LargeButton = styled(Button)`
    font-size: 40px;
    padding: 12px 32px;
    height: 90px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #E8E1D5;
    margin-top: 50px;
`;

const IntroPage = () => {
    const { moveToPath } = useCustomMove();

    const onClickWriteEmotion = () => {
        moveToPath("/articles");
    };

    return (
        <Wrapper>
            <Title>종이배</Title>
            <Description>종이배는 자신의 감정을 글로 표현하는 공간입니다.</Description>
            <Description>오늘의 나의 기분과 감정을 적고 나눠보세요!</Description>
            <LargeButton type="primary" size="large" onClick={onClickWriteEmotion}>
                내 감정 쓰러가기
            </LargeButton>
        </Wrapper>
    );
};

export default IntroPage;
