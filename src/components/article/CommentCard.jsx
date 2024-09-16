import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Modal, Input } from 'antd';
import { useParams } from "react-router-dom";
import { updateComment, deleteComment } from "../../services/articleCommentService";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 552px;
    margin-bottom: 20px;
    background-color: #FFECCC;
    border-radius: 15px;
    height: 100px;
    padding: 20px;
`;

const TopWrapper = styled.div`
    display: flex;
`;

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const WriterInfoWrapper = styled.div`
    display: flex;
`;

const ProfileImg = styled.div`
    width: 36px;
    height: 36px;
    background-color: #E8E1D5;
    border-radius: 50%;
    margin-right: 7px;
`;

const Writer = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-right: 30px;
`;

const CreatedAt = styled.p`
    font-size: 14px;
    font-weight: 400;
`;

const Buttons = styled.div`
    margin-left: auto;
    display: flex;
    gap: 10px
`;

const ContentBox = styled.div`
    text-align: left;
    padding-left: 42px;
    margin-top: 10px;
    font-size: 18px;
`;

function CommentCard({ comment, refreshComments }) {
    const { id } = useParams();

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [content, setContent] = useState(comment.content); 

    const loggedInNickname = localStorage.getItem('nickname');

    // 댓글 수정이 완료된 후 리렌더링 로직 (useEffect)
    useEffect(() => {
        console.log('댓글이 수정되었습니다:', content);
    }, [content]);

    const showDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const handleDeleteOk = () => {
        deleteComment(id, comment.commentId)
            .then(() => {
                console.log("댓글이 삭제되었습니다.");
                setIsDeleteModalOpen(false);
                refreshComments();
            })
            .catch((err) => {
                console.error("댓글 삭제 중 오류 발생:", err);
            });
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false);
    };

    const showUpdateModal = () => {
        setIsUpdateModalOpen(true);
    };

    const handleUpdateOk = () => {
        updateComment(id, comment.commentId, content)
            .then(() => {
                console.log('댓글이 수정되었습니다.');
                setIsUpdateModalOpen(false);

            })
            .catch(err => {
                console.error('댓글 수정 중 오류 발생:', err);
            });
    };

    const handleUpdateCancel = () => {
        setIsUpdateModalOpen(false);
    };

    // 댓글 수정 입력 핸들러
    const handleInputChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <>
            <CardWrapper data-id={comment.commentId}>
                <TopWrapper>
                    <div className="comment-info">
                        <InfoWrapper>
                            <ProfileImg></ProfileImg>
                            <WriterInfoWrapper>
                                <Writer>{comment.nickname}</Writer>
                                <CreatedAt>{comment.createdAt}</CreatedAt>
                            </WriterInfoWrapper>
                        </InfoWrapper>
                    </div>
                    {loggedInNickname === comment.nickname && (
                        <Buttons>
                            <Button type="primary" onClick={showUpdateModal}>
                                수정
                            </Button>
                            <Button type="primary" onClick={showDeleteModal}>
                                삭제
                            </Button>
                        </Buttons>
                    )}
                </TopWrapper>
                <ContentBox>{content}</ContentBox> {/* content 사용 */}
            </CardWrapper>

            {/* 삭제 확인 모달 */}
            <Modal
                title="댓글 삭제 확인"
                open={isDeleteModalOpen}
                onOk={handleDeleteOk}
                onCancel={handleDeleteCancel}
                okText="삭제"
                cancelText="취소"
            >
                <p>이 댓글을 삭제하시겠습니까?</p>
            </Modal>

            {/* 수정 모달 */}
            <Modal
                title="댓글 수정"
                open={isUpdateModalOpen}
                onOk={handleUpdateOk}
                onCancel={handleUpdateCancel}
                okText="수정"
                cancelText="취소"
            >
                <Input.TextArea
                    value={content}  // 수정된 댓글 상태
                    onChange={handleInputChange}  // 입력 값 변경 처리
                    rows={4}
                    placeholder="댓글을 수정하세요"
                />
            </Modal>
        </>
    );
}

export default CommentCard;
