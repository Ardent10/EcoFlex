import React, { useState } from 'react';
import styled from "styled-components";
import { login } from '../../redux/apiCalls';
// import {mobile} from "../Responsive";
import {useDispatch, useSelector} from "react-redux";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
                    rgba(255,255,255,0.5),
                    rgba(255,255,255,0.5)
                ), 
                url("https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 20%;
    padding: 30px;
    border-radius:5px;
    background-color: white;
    ${'' /* ${mobile({
        width: "60%"
        
    })}; */}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align:center;

`;
const Form = styled.form`
    display: felx;
    flex-direction: column;
    display:flex;
    align-items:center;
    justify-content: center;
`;
const Input = styled.input`
    flex: 1;
    min-width: 70%;
    margin: 10px;
    padding: 10px;
`;

const Button = styled.button`
    width: 80%;
    border: none;
    border-radius:10px;
    padding: 15px 20px;
    margin: 10px;   
    background-color: teal;
    color: white;
    cursor:  pointer;

    &:hover{
        background-color: #1EA1A1;
    }

    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;
// const Link= styled.a`
//     margin:5px 0;
//     font-size: 12px;
//     text-decoration: underline;
//     cursorL pointer;
// `;

const Error = styled.span`
    color: red;
`;


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, error}     = useSelector(state=>state.user)
    const dispatch = useDispatch();

    const handleClick = (e)=>{
        if (username === "" || password === "") {
            alert("Fields are required");
            return;
          }
        login(dispatch, {username,password});
        e.preventDefault();
        window.location.reload(true);
    }

    return (
        <Container>
            <Wrapper>

                <Title><b>Admin Login</b></Title>
                <Form>
                    <Input 
                        placeholder="Username" 
                        required
                        onChange={(e)=>setUsername(e.target.value)}/>
                    
                    <Input 
                        placeholder="Password" 
                        type="password"
                        required
                        onChange={(e)=>setPassword(e.target.value)}/>                   
                    
                    <Button 
                        onClick={handleClick}
                        disabled={isFetching}
                        >LOGIN
                    </Button>              
                     {error && <Error>Oops! Something went wrong .... </Error>}
                </Form>

            </Wrapper>
        </Container>
    )
}

export default Login
