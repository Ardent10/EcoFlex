import React from 'react';
import {categories} from "../data";
import styled from "styled-components";
import CategoryItems from './CategoryItems';
import {mobile} from "../Responsive";

const Container = styled.div`
    margin:0 120px;
    display: flex; 
    flex-wrap:wrap;
    padding: 20px;
    justify-content: space-between;
    ${mobile({
        padding:"0",
        margin:'0 10px',
        flexDirection:"column" 
        
    })};
`;
const Categories = () => {
    return (
        <Container>
            {categories.map((item)=>(
                <CategoryItems item = {item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
