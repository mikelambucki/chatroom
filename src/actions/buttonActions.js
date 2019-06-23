
import Axios from 'axios';

let axios = Axios.create({
    baseURL: 'http://localhost:3013',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});
//posts request to server when user sends message in chat
export const chatMessage = (post) => async dispatch => {
    await axios.post('http://localhost:3013/', { ...post })
};

//sign up request, posts user info to server
export const signUp = (info) => async dispatch => {
    await axios.post('http://localhost:3013/users/register', { ...info });
    console.log("reached post request...");
};