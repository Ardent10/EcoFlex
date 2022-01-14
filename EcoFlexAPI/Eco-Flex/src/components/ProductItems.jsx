import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Info= styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    Cursor: pointer;
`;

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width:280px;
    border-radius: 10px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity:1;
    }
`;
const Title = styled.h1`
    font-weight: 500;
    font-size:20px;
    margin-top:200px;
    position:absolute;
    z-index:10;
`;

const Circle= styled.div`
    width: 200px;
    height: 200px;
    border-radius:50%;
    background-color: white;
    position: absolute;
`;
const Image= styled.img`
    height: 75%;
    z-index:2;
`;
const Icon= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #FFDEDE;
        transform: scale(1.1); 
    }
`;
const ProductItems = ({item}) => {
       
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Title>{item.title}</Title>
            <Info >
                <Icon>
                    <Link to = {"/cart"}>
                        <ShoppingCartOutlinedIcon/>
                    </Link>
                </Icon>
                <Icon >
                    <Link to = {`/product/${item._id}`}>
                        <SearchIcon/>
                    </Link>
                </Icon>
                <Icon >
                    <FavoriteBorderIcon/>
                </Icon>
            </Info>

        </Container>
    )
}

export default ProductItems;
