import axios from "axios";

const base_url = "http://localhost:8080/api/user";

export const getUserInfo = async () => {
    const accessToken = localStorage.getItem('Access Token');

    try {
        const res = await axios(`${base_url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        if (res.data && res.data.nickname) {
            localStorage.setItem('nickname', res.data.nickname); 
        }

        return res.data;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error; 
    }
}
