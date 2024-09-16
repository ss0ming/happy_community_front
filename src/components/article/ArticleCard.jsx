import styled from 'styled-components';
import useCustomMove from "../../hooks/useCustomMove";

const CardWrapper = styled.div`
    width: 592px;
    height: 180px;
    border-radius: 16px;
    background-color: #FBF6F0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

const TopWrapper = styled.div`
    width: 100%;
    width: 544px;
    height: 110px;
    background-color: inherit;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

const Line = styled.hr`
    width: 592px;
    border: 1px solid #00000029;    
`

const BottomWrapper = styled.div`
    width: 544px;
    height: 59px;
    display: flex;
    background-color: inherit;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 15px;
    background-color: inherit;
`

const ProfileWrapper = styled.div`
    height: 36px;
    display: flex;
    background-color: inherit;
    align-items: center;
`

const ProfileImg = styled.div`
    width: 36px;
    height: 36px;
    background-color: #D9D9D9;
    border-radius: 50%;
`

const Info = styled.div`
    display: flex;
    margin: 0 auto;
    width: 100%;
    width: 544px;
    background-color: inherit;
    justify-content: space-between;
`

const Name = styled.p`
    font-size: 15px;
    font-weight: 700;
    margin-left: 12px;
    background-color: inherit;
`

const backgroundColor = { background: '#FBF6F0' };

function ArticleCard({ id, title, nickname, createdAt, likes, commentCount, viewCount }) {

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

    const { moveToArticleDetail } = useCustomMove();

    return (
        <CardWrapper onClick={() => moveToArticleDetail(id)}>
            <TopWrapper>
                <Title>{title}</Title>
                <Info>
                    <p style={ backgroundColor }> 좋아요 {calculateNum(likes)}  댓글 {calculateNum(commentCount)}  조회수 {calculateNum(viewCount)}</p>
                    <div style={ backgroundColor }><p style={ backgroundColor }>{createdAt}</p></div>
                </Info>
            </TopWrapper>
            <Line/>
            <BottomWrapper>
                <ProfileWrapper>
                    <ProfileImg></ProfileImg>
                    <Name>{nickname}</Name>
                </ProfileWrapper>
            </BottomWrapper> 
        </CardWrapper>
    );
}

export default ArticleCard;