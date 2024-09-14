import styled from "styled-components";
import useCustomMove from "../../hooks/useCustomMove";
import Button from "../common/Button";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 544px;
    margin-bottom: 20px;
`

const TopWrapper = styled.div`
    display: flex;
`

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
`

const WriterInfoWrapper = styled.div`
    display: flex;
`

const ProfileImg = styled.div`
    width: 36px;
    height: 36px;
    background-color: #D9D9D9;
    border-radius: 50%;
    margin-right: 7px;
`

const Writer = styled.p`
    font-size: 15px;
    font-weight: 700;
    margin-right: 30px;
`

const CreatedAt = styled.p`
    font-size: 14px;
    font-weight: 400;
`

const Buttons = styled.div`
    margin-left: auto;
`

const ContentBox = styled.div`
    text-align: left;
    padding-left: 42px;
    margin-top: 10px;
`

function CommentCard({}) {
    return ( 
        <CardWrapper data-id="${comment.id}">
            <TopWrapper>
                <div class="comment-info">
                    <InfoWrapper>
                        <ProfileImg></ProfileImg>
                        <WriterInfoWrapper>
                            <Writer>닉네임</Writer>
                            <CreatedAt>2024-06-01 00:00:00</CreatedAt>
                        </WriterInfoWrapper>
                    </InfoWrapper>
                </div>
                <Buttons>
                    <Button
                        buttonName="수정"
                        buttonStyle="SmallButton"
                        isDisabled={true}
                    />
                    <Button
                        buttonName="삭제"
                        buttonStyle="SmallButton"
                        isDisabled={true}
                    />
                </Buttons>
            </TopWrapper>
            <ContentBox>댓글 내용내용내용</ContentBox>
        </CardWrapper>
    );
}

export default CommentCard;