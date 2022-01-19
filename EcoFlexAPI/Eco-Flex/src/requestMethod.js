import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = localStorage.getItem("Authorization");
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDAxZjEwM2M3OGJjYWExNDBjYThkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTU1NDIyMiwiZXhwIjoxNjQxODEzNDIyfQ.-LUBUiEuJIxQCevkUyw-w6u_i-22GMK6-CNj2L06fYM";
// console.log(TOKEN);


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Jhoncena ${TOKEN}`}
});