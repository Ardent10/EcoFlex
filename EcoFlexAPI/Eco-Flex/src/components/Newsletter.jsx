import React from 'react';
import styled from "styled-components";
import { Send } from '@mui/icons-material';
import {mobile} from "../Responsive";

const Container = styled.div`
    height: 50vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({
        fontSize: "45px",
        
    })};
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({
        textAlign: "center",
        fontSize: "16px",
        width: "72%"
    })};
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    ${mobile({
        width: "80%",
        
    })};
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    margin:-1px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        background-color:#1EA1A1;
    }
`;


const Newsletter = () => {
    return (
        <Container>
            <Title>NEWSLETTER</Title>
            <Desc>Get timely updates from your favourite products.</Desc>
            <InputContainer >
                <Input placeholder="Your email"/>
                <Button>
                    <a style={{color:"#fff"}} href="mailto:ecoflex@gmail.com"><Send/></a>
                    
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
