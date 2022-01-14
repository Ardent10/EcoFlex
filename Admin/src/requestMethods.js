import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//         .currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDAxZjEwM2M3OGJjYWExNDBjYThkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTU3MDgxNCwiZXhwIjoxNjQxODMwMDE0fQ.hLeLIan6t3KbeUKDqa_J5PwQ5numwKxUOsTW8iJJ1g0";
// console.log(TOKEN);

export const publicRequest = axios.create({
    baseURL: BASE_URL 
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Jhoncena ${TOKEN}`}
});