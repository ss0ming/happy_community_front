import { useNavigate } from "react-router-dom"

const useCustomMove = () => {
    
    const navigate = useNavigate();

    // 게시글 등록 페이지로 이동
    const moveToPath = (path) => {
        navigate({ pathname: path })
    }

    const moveToArticleDetail = (id) => {
        navigate({
            pathname: `/articles/${id}`
        })
    }

    return { moveToPath, moveToArticleDetail };
}

export default useCustomMove;