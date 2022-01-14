import React from 'react';
import styled from "styled-components";
import {mobile} from "../Responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
   
    flex: 2 0 30%;
    margin: 10px;
    height: 70vh;
    position: relative;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.02);
    }

    ${mobile({
        flex: '2 0 20%',
        
    })};
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius:5px;
    object-fit: cover;
    ${mobile({
        height:"30vh", 
        
    })};
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    ${mobile({
        fontSize:'20px', 
        margin: '0px',
    })};
`;
const Desc = styled.p`
    margin: 50px 0px;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({
        fontSize:'12px', 
        margin: '10px 0px',
    })};
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: white;
    color: grey;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover{
        transform: scale(1.2);
        background-color: teal;
        color: white;
    }
`;

const CategoryItems = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>

            <Image src={item.img}/>

            <Info>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </Info>

            </Link>
        </Container>
    )
}

export default CategoryItems
