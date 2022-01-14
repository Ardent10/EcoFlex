import axios from "axios";

const BASE_URL = "https://ecoflex-shop.herokuapp.com/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDAxZjEwM2M3OGJjYWExNDBjYThkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTU1NDIyMiwiZXhwIjoxNjQxODEzNDIyfQ.-LUBUiEuJIxQCevkUyw-w6u_i-22GMK6-CNj2L06fYM";
// console.log(TOKEN);


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Jhoncena ${TOKEN}`}
});