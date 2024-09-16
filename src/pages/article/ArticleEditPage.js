import Header from "../../components/Header";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { getArticle, updateArticle } from "../../services/articleService";
import { Button, Input } from 'antd';
import { useParams, useNavigate } from "react-router-dom";
import TitleInput from '../../components/common/TitleInput';
import ContentInput from "../../components/common/ContentInput";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
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
`;

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

const initArticleState = {
    title: "",
    content: "",
};

const ArticleEditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // 리다이렉트를 위한 useNavigate
    const [article, setArticle] = useState(initArticleState);

    // 게시글 데이터를 가져오는 useEffect
    useEffect(() => {
        getArticle(id).then(data => {
            setArticle(data); // 서버에서 가져온 데이터를 상태로 설정
        }).catch(err => {
            console.error("게시글을 가져오지 못했습니다:", err);
        });
    }, [id]);

    // 입력 필드 값 변경 처리
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setArticle((prevState) => ({
            ...prevState,
            [name]: value, // name 속성에 따라 title 또는 content를 업데이트
        }));
    };

    // 수정된 데이터를 서버로 저장
    const handleSave = () => {
        updateArticle(id, article)
            .then(() => {
                console.log("수정 완료");
                navigate(`/articles/${id}`); // 수정 완료 후 상세 페이지로 리다이렉트
            })
            .catch(err => {
                console.error("수정 실패:", err);
            });
    };

    return (
        <div>
            <Header />
            <Wrapper>
                <ContentWrapper>
                    <h1>게시글 수정</h1>
                    <FormWrapper>
                        <TitleInput
                            name="title"
                            label="제목"
                            type="text"
                            value={article.title}
                            placeholder="제목을 입력하세요"
                            onChange={handleInputChange}

                        />

                        <ContentInput
                            name="content"
                            label="내용"
                            type="text"
                            value={article.content}
                            placeholder="내용을 입력하세요"
                            onChange={handleInputChange}
                        /> 

                        <StyledButton 
                            type="primary" 
                            onClick={handleSave}
                            block
                        >
                            저장
                        </StyledButton>
                    </FormWrapper> 
                </ContentWrapper>
            </Wrapper>
        </div>
    );
}

export default ArticleEditPage;
