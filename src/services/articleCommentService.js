import axios from "axios";
const comment_base_url = "http://localhost:8080/api/articles";

export const getComments = async (ano) => {
    const res = await axios.get(`${comment_base_url}/${ano}/comments`);
    return res.data
}

export const getComment = async (ano, cno) => {
    const res = await axios.get(`${comment_base_url}/${ano}/comments/${cno}`);
    return res.data
}

export const addComment = async (ano, content) => {
    const accessToken = localStorage.getItem('Access Token');

    const res = await axios.post(`${comment_base_url}/${ano}/comments`,
        {
            content: content
        },{
            headers: 
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            }
        }
    );
    return res.data
}

export const updateComment = async (ano, cno, content) => {
    const accessToken = localStorage.getItem('Access Token');

    const res = await axios.put(`${comment_base_url}/${ano}/comments/${cno}`, 
        {
            content: content
        }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    });
    return res.data
   
}

export const deleteComment = async (ano, cno) => {
    const accessToken = localStorage.getItem('Access Token');

    const res = await axios.delete(
        `${comment_base_url}/${ano}/comments/${cno}`, 
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        }
    );
    return res.data;
};