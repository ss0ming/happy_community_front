import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';
import { addComment } from '../../services/articleCommentService';
import { useParams } from 'react-router-dom';

const FormWrapper = styled.div`
    width: 100%;
    max-width: 544px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const TextArea = styled(Input.TextArea)`
    width: 100%;
    margin-bottom: 10px;
    font-size: 20px;
    border-color: #3e3737;

    &:focus {
        border-color: #8B847E; 
        border-width: 2px;
        outline: none;
        box-shadow: 0 0 0 3px rgba(139, 132, 126, 0.2);
    }
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 40px;
`;

const StyledButton = styled(Button)`
    width: 100px; 
    height: 40px; 
    font-size: 23px;
    font-weight: 500;
    background-color: #EFD8C2;
`;

const CommentForm = ({ articleId, refreshComments }) => {
    const { id } = useParams();

    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        if (content.trim() === '') {
            alert('댓글을 입력해주세요.');
            return;
        }

        setLoading(true);
        addComment(id, content)
            .then(() => {
                setContent(''); // 입력된 내용 초기화
                refreshComments(); // 댓글 목록 갱신
            })
            .catch((error) => {
                console.error('댓글 등록 중 오류 발생:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <FormWrapper>
            <TextArea
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="댓글을 입력하세요."
            />
            <ButtonWrapper>
                <StyledButton type="primary" onClick={handleSubmit} loading={loading}>
                    등록
                </StyledButton>
            </ButtonWrapper>
        </FormWrapper>
    );
};

export default CommentForm;
