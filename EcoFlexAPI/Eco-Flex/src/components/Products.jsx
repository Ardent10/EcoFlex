import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductItems from './ProductItems';
import axios from "axios";
import {mobile} from "../Responsive";

const Container = styled.div`
    margin: 10px 50px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${mobile({
        padding: "0",
        
    })};

`;

const Products = ({cat,filters,sort}) => {
    // console.log(cat, filters, sort);

    const [products,setProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState([]);

    useEffect(()=>{
          const getProducts = async()=>{

            try
            {
                const res = await axios.get(
                    cat? `https://ecoflex-shop.herokuapp.com/api/products?category=${cat}`:"https://ecoflex-shop.herokuapp.com/api/products");
                
                    setProducts(res.data);
                    console.log(res.data);
            }
            catch(err)
            {
                console.log(err);
            }
          };
          getProducts();

    },[cat]);

    useEffect(()=>{
        cat && setFilteredProducts(products
            .filter((item)=> 
            Object.entries(filters)
            .every(([key,value])=>
                item[key].includes(value)
            ))
        );
    },[cat,filters,products]);

    useEffect(()=>{
        if(sort === "newest"){
            setFilteredProducts(prev=> [...prev].sort((a,b)=> 
                 a.createdAt-b.createdAt
            
            ))
        }
        else if(sort === "asc"){
            setFilteredProducts(prev=> [...prev].sort((a,b)=> 
                 a.price-b.price
            
            ))
        }
        else{
            setFilteredProducts(prev=> [...prev].sort((a,b)=> 
                 b.price -a.price
            ))
        }
    },[sort])

    return (
        
        <Container>
            {cat
                ?filteredProducts.map((item)=>(<ProductItems item={item} key={item._id} />))
                : products.slice(0,9).map((item)=>(<ProductItems item={item} key={item._id} />))
            }
        </Container>

    )
}

export default Products;
