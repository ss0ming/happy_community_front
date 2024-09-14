import Header from "../../components/Header";
import styled from 'styled-components';
import Button from "../../components/common/Button";
import Comment from "../../components/article/CommentCard";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`
const ContentWrapper = styled.div`
    width: 100%;
    max-width: 592px;
    text-align: center;
    margin-top: 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const TitleWrapper = styled.div`
    margin-right: auto;
    margin-left: 24px;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
`

const InfoWrapper = styled.div`
    display: flex;
    width: 544px;
    align-items: center;
`

const ProfileImg = styled.div`
    width: 36px;
    height: 36px;
    background-color: #D9D9D9;
    border-radius: 50%;
    margin-right: 7px;
`
const ArticleInfoWrapper = styled.div`
    display: flex;
`

const WriterWrapper = styled.p`
    font-size: 17px;
    font-weight: 700;
    margin-right: 30px;
`

const CreatedAtWrapper = styled.p`
    font-size: 17px;
    font-weight: 400;
`

const ButtonsWrapper = styled.div`
    margin-left: auto;
`

const Line = styled.hr`
    width: 100%;
    border: 1px solid #00000029;
    margin-bottom: 20px;
`

const ArticleWrapper = styled.div`
    width: 544px;
`

const ContentImg = styled.div`
    width: 544px;
    height: 306px;
    background-color: #D9D9D9;
    margin-bottom: 20px;
`

const Content = styled.p`
    text-align: left;
    font-size: 15px;
    font-weight: 400;
`

const StatWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

const StatBox = styled.div`
    width: 116px;
    height: 77px;
    border-radius: 16px;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
`

const StatNums = styled.p`
    font-size: 20px;
    font-weight: 700;
    background-color: #D9D9D9;
`

const StatName = styled.p`
    font-size: 16px;
    font-weight: 700;
    background-color: #D9D9D9;
`

const ArticleDetailPage = () => {

    const calculateNum = (num) => {
        if (num < 1000) {
            return num;
        } else if (num >= 1000 && num <10000) {
            return "1k";
        } else if (num >= 10000 && num <100000) {
            return "10k";
        }
        return "100k";
    }

    return (
        <div>
            <Header/>
            <Wrapper>
                <ContentWrapper>
                    <TitleWrapper>제목</TitleWrapper>
                    <InfoWrapper>
                        <ProfileImg></ProfileImg>
                        <ArticleInfoWrapper>
                            <WriterWrapper>글쓴이</WriterWrapper>
                            <CreatedAtWrapper>2024-05-30 10:00:00</CreatedAtWrapper>
                        </ArticleInfoWrapper>
                        
                        <ButtonsWrapper>
                            <Button
                                buttonName="수정"
                                buttonStyle="SmallButton"
                                isDisabled={false}
                                // action={}
                            />
                            <Button
                                buttonName="삭제"
                                buttonStyle="SmallButton"
                                isDisabled={false}
                                // action={}
                            />
                        </ButtonsWrapper>
                    </InfoWrapper>
                    <Line/>
                    <ArticleWrapper>
                        <ContentImg></ContentImg>
                        <Content></Content>
                        <StatWrapper>
                            <StatBox><StatNums>{calculateNum(100)}</StatNums><StatName>조회수</StatName></StatBox>
                            <StatBox><StatNums>{calculateNum(10000)}</StatNums><StatName>댓글</StatName></StatBox>
                        </StatWrapper>
                    </ArticleWrapper>
                    <Line/>
                </ContentWrapper>
                <Comment/>
                <Comment/>
            </Wrapper>
        </div>
    )
}

export default ArticleDetailPage;