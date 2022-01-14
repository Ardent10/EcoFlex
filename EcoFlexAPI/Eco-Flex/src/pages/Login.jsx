import React, { useState } from 'react';
import styled from "styled-components";
import { login } from '../redux/apiCalls';
import {mobile} from "../Responsive";
import {useDispatch, useSelector} from "react-redux";
import {Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import { searchLinks } from '../data';

const Main = styled.div`
    overflow-x:hidden;
    overflow-y:hidden;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
                    rgba(255,255,255,0.5),
                    rgba(255,255,255,0.5)
                ), 
                url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")center;
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
    ${mobile({
        width: "60%"
        
    })};
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

const Error = styled.span`
    color: red;
`;


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, error}     = useSelector(state=>state.user)

    const dispatch = useDispatch();

    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch, {username,password});
    }

    return (
        <Main>
            <Navbar data= {searchLinks}/>
        <Container>
            <Wrapper>

                <Title><b>SIGN IN</b></Title>
                <Form>
                    <Input 
                        placeholder="Username" 
                        onChange={(e)=>setUsername(e.target.value)}/>
                    
                    <Input 
                        placeholder="Password" 
                        type="password"
                        onChange={(e)=>setPassword(e.target.value)}/>                   
                    
                    <Button 
                        onClick={handleClick}
                        disabled={isFetching}
                        >LOGIN</Button>
                   {error && <Error>Oops! Something went wrong .... </Error>}
                   <Link to="/register">FORGOT PASSWORD?</Link>    
                    <Link to="/register">CREATE A NEW ACCOUNT</Link>                 
                </Form>

            </Wrapper>
        </Container>
    </Main>
    )
}

export default Login
