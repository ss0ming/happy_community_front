import axios from "axios";
const article_base_url = "http://localhost:8080/api/articles";

export const getArticles = async () => {
    const res = await axios.get(`${article_base_url}`);
    return res.data
}

export const getArticle = async (ano) => {
    const res = await axios.get(`${article_base_url}/${ano}`);
    return res.data
}

export const addArticle = async (article) => {
    const accessToken = localStorage.getItem('Access Token');

    const res = await axios.post(`${article_base_url}`, article, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    return res.data
}

export const updateArticle = async (ano, article) => {

    const accessToken = localStorage.getItem('Access Token');

    const res = await axios.put(`${article_base_url}/${ano}`, article, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    });
    return res.data

}

export const deleteArticle = async (ano) => {
    const accessToken = localStorage.getItem('Access Token');

    const res = await axios.delete(
        `${article_base_url}/${ano}`, 
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        }
    );
    return res.data
}