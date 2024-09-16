import Header from "../../components/Header"
import styled, { createGlobalStyle } from 'styled-components';
import ArticleCard from "../../components/article/ArticleCard";
import useCustomMove from "../../hooks/useCustomMove";
import { getArticles } from "../../services/articleService";
import { useEffect, useState } from "react";
import { Button } from 'antd';
import { getUserInfo } from "../../services/userService";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`

const ButtonWrapper = styled.div`
    width: 100%;
    max-width: 592px;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`

const LargeButton = styled(Button)`
    font-size: 20px;
    padding: 12px 32px;
    height: 50px;     
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #EFD8C2;
`;

const ContentTitle = styled.p`
    font-size: 24px;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 10Px;
    text-align: center;
    background-color: #FFECCC;
`

const CardsWrapper = styled.div`
    width: 100%;
    max-width: 592px;
    text-align: center;
`

const initState =  [];

const ArticlesPage = () => {

    const { moveToPath, moveToArticleDetail } = useCustomMove();

    const onClickRegisterButton = () => {
        moveToPath("/articles/register");
    }

    const [serverData, setServerData] = useState(initState);
    const [userData, setUserData] = useState();

    useEffect(() => {
        getUserInfo().then(data => {
            setUserData(data.nickname);
            console.log('닉네임',userData);
        });

        getArticles().then(data => {
            setServerData(data);
        });

    }, []);

    return (
        <div>
            <Header />
            <Wrapper>
                <ContentTitle>종이배는 자신의 감정을 글로 표현하는 공간입니다.</ContentTitle>
                    
                <ContentTitle>오늘의 나의 기분과 감정을 적고 나눠보세요!</ContentTitle>
                <ButtonWrapper>
                    <LargeButton type="primary" size="large" onClick={onClickRegisterButton}>
                        게시글 작성
                    </LargeButton>
                </ButtonWrapper>

                {serverData && serverData.length > 0 ? (
                    serverData.map(article => (
                        <CardsWrapper 
                        key={article.articleId}
                        onClick={() => moveToArticleDetail(article.articleId)}>
                            <ArticleCard
                                id={article.articleId}
                                title={article.title}
                                nickname={article.nickname}
                                createdAt={article.createdAt}
                                likes={article.likes}
                                commentCount={article.commentCount}
                                viewCount={article.viewCount}
                            />
                        </CardsWrapper>
                    ))
                ) : (
                    <p>게시글이 없습니다.</p> // 데이터가 없을 때 보여줄 메시지
                )}
            </Wrapper>
        </div>
    )
}

export default ArticlesPage;