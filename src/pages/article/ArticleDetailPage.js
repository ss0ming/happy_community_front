import Header from "../../components/Header";
import styled from 'styled-components';
import Comment from "../../components/article/CommentCard";
import CommentForm from "../../components/article/CommentForm";
import { useEffect, useState } from "react";
import { deleteArticle, getArticle } from "../../services/articleService";
import { getComments } from "../../services/articleCommentService";
import { Button, Modal, message } from 'antd';
import { useParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`
const ContentWrapper = styled.div`
    width: 100%;
    max-width: 512px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #E8E1D5;
    border-radius: 20px;
    padding: 40px;
`

const TitleWrapper = styled.div`
    margin-right: auto;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 700;
`

const WriterWrapper = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-left: auto;
`

const CreatedAtWrapper = styled.p`
    font-size: 17px;
    font-weight: 400;
    margin-left: auto;
`

const ButtonsWrapper = styled.div`
    max-width: 592px;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    width: 100%
`

const ArticleWrapper = styled.div`
    width: 100%;
    height: 300px;
`

const Content = styled.p`
    text-align: left;
    font-size: 20px;
    font-weight: 400;
`

const initArticleState = {
    articleId: null,
    title: "",
    content: "",
    image: "",
    likes: 0,
    viewCount: 0,
    createdAt: "",
    email: "",
    nickname: "",
    profileImage: "",
    commentCount: 0
};

const initCommentsState = [];

const ArticleDetailPage = () => {
    const { id } = useParams();

    const { moveToArticleUpdate, moveToPath } = useCustomMove();

    const [article, setArticle] = useState(initArticleState);
    const [comments, setComments] = useState(initCommentsState);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const loggedInNickname = localStorage.getItem('nickname');

    const showDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const handleDeleteOk = () => {
        setIsDeleteModalOpen(false);
        deleteArticle(id)
            .then(() => {
                message.success('게시물이 삭제되었습니다.');
                setIsDeleteModalOpen(false);
                moveToPath(`/articles`);
            }).catch(err => {
                console.error('게시글 수정 중 오류 발생:', err);
                message.error('게시물 삭제를 실패했습니다.');
            })
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false);
    };

    useEffect(() => {
        getArticle(id).then(data => {
            setArticle(data);
        })
    }, [id]);

    useEffect(() => {
        getComments(id).then(data => {
            setComments(data);
        });
    }, []);

    // 댓글 목록을 다시 불러오는 함수
    const refreshComments = () => {
        getComments(id)
            .then((newComments) => {
                setComments(newComments);
            })
            .catch((err) => {
                console.error("댓글을 다시 불러오는 중 오류 발생:", err);
            });
    };

    useEffect(() => {
        refreshComments(); // 처음에 댓글 목록을 불러옴
    }, []);

    return (
        <div>
            <Header/>
            <Wrapper>

                {loggedInNickname === article.nickname && (
                    <ButtonsWrapper>
                        <Button type="primary" onClick={() => moveToArticleUpdate(id)}>
                            수정
                        </Button>
                        <Button type="primary" onClick={showDeleteModal} >
                            삭제
                        </Button>
                    </ButtonsWrapper>
                )}
                
                <ContentWrapper>
                    <CreatedAtWrapper>{article.createdAt}</CreatedAtWrapper>
                    <TitleWrapper>{article.title}</TitleWrapper>

                    <ArticleWrapper>
                        <Content>{article.content}</Content>
                    </ArticleWrapper>

                    <WriterWrapper>FROM. {article.nickname}</WriterWrapper>

                </ContentWrapper>
                
                <CommentForm articleId={id} refreshComments={refreshComments} />
                {comments && comments.length > 0 ? (
                    comments.map(comment => (
                        <Comment 
                            key={comment.commentId} 
                            comment={comment}
                            refreshComments={refreshComments}/>
                    ))
                ) : (
                    <div></div>
                )}
            </Wrapper>
            {/* 삭제 확인 모달 */}
            <Modal
                title="게시글 삭제 확인"
                open={isDeleteModalOpen}
                onOk={handleDeleteOk}
                onCancel={handleDeleteCancel}
                okText="삭제"
                cancelText="취소"
                >
                <p>이 게시글을 삭제하시겠습니까?</p>
            </Modal>
        </div>
    )
}

export default ArticleDetailPage;