import Header from "../../components/Header";
import { useState } from 'react';
import styled from 'styled-components';
import { Button, message } from 'antd';
import { addArticle } from '../../services/articleService';
import useCustomMove from '../../hooks/useCustomMove';
import TitleInput from '../../components/common/TitleInput';
import ContentInput from "../../components/common/ContentInput";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 600px;
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

const FormWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin-top: 24px;
`;

const StyledButton = styled(Button)`
    height: 50px;
    font-size: 20px; 
    font-weight: 600;
`;

const PostArticlePage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const { moveToPath } = useCustomMove();

    const handleSubmit = () => {
        if (title.trim() === '' || content.trim() === '') {
            message.error('제목과 내용을 입력해주세요.');
            return;
        }

        setLoading(true);

        addArticle({ title, content })
            .then(() => {
                message.success('게시글이 성공적으로 등록되었습니다.');
                moveToPath('/articles');
            })
            .catch((error) => {
                console.error('게시글 등록 중 오류 발생:', error);
                message.error('게시글 등록 중 오류가 발생했습니다.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <Header />
            <Wrapper>
                <ContentWrapper>
                    <h1>게시글 등록</h1>
                    <FormWrapper>
                        <TitleInput
                            name="title"
                            label="제목"
                            type="text"
                            value={title}
                            placeholder="제목을 입력하세요"
                            onChange={(e) => setTitle(e.target.value)}
                            helperText={title.trim() === '' ? '제목을 입력해주세요' : ''}
                        />

                        <ContentInput
                            name="content"
                            label="내용"
                            type="text"
                            value={content}
                            placeholder="내용을 입력하세요"
                            onChange={(e) => setContent(e.target.value)}
                            helperText={title.trim() === '' ? '내용을 입력해주세요' : ''}
                        />          

                        <StyledButton
                            type="primary"
                            onClick={handleSubmit}
                            loading={loading}
                            block
                        >
                            등록하기
                        </StyledButton>
                </FormWrapper>
                </ContentWrapper>
            </Wrapper>
        </div>
    );
};

export default PostArticlePage;
