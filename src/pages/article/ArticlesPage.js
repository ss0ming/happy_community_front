import Header from "../../components/Header"
import styled from 'styled-components';
import ArticleCard from "../../components/article/ArticleCard";
import Button from "../../components/common/Button";

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
`

const ContentTitle = styled.p`
    font-size: 24px;
    font-weight: 400;
    margin-top: 50px;
    text-align: center;
`

const CardsWrapper = styled.div`
    width: 100%;
    max-width: 592px;
    text-align: center;
`

const ArticlesPage = () => {

    return (
        <div>
            <Header />
            <Wrapper>
                <ContentTitle>안녕하세요, <br/> 아무 말 대잔치 <b>게시판</b> 입니다.</ContentTitle>
                <ButtonWrapper>
                    <Button 
                        buttonName='게시글 작성'
                        buttonStyle='BigButton'
                        isDisabled={false}
                    />
                </ButtonWrapper>
                
                <CardsWrapper>
                    <ArticleCard
                        title={"제목"}
                        nickname={"글쓴이"}
                        createdAt={"2024-05-30 13:00:00"}
                        likes={100}
                        commentCount={20}
                        viewCount={1000000}
                    />
                </CardsWrapper>
                <CardsWrapper>
                    <ArticleCard
                        title={"제목"}
                        nickname={"글쓴이"}
                        createdAt={"2024-05-30 13:00:00"}
                        likes={100}
                        commentCount={20}
                        viewCount={1000000}
                    />
                </CardsWrapper>
            </Wrapper>
        </div>
    )
}

export default ArticlesPage;