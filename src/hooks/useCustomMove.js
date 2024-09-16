import { useNavigate } from "react-router-dom"

const useCustomMove = () => {
    
    const navigate = useNavigate();

    // path 페이지로 이동
    const moveToPath = (path) => {
        navigate({ pathname: path })
    }

    const moveToArticleDetail = (id) => {
        navigate({
            pathname: `/articles/${id}`
        })
    }

    const moveToArticleUpdate = (id) => {
        navigate({
            pathname: `/articles/${id}/edit`
        })
    }

    return { moveToPath, moveToArticleDetail, moveToArticleUpdate };
}

export default useCustomMove;