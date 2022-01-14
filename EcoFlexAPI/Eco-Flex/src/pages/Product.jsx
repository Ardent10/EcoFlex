import React, { useState,useEffect } from 'react';
import { Add, Remove } from '@mui/icons-material';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import {mobile} from "../Responsive";
import {useLocation} from "react-router-dom";
import { publicRequest } from '../requestMethod';
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import Impact from "../components/Impact";
import Rating from '@mui/material/Rating';
import { searchLinks } from '../data';

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 50px;
    margin: 0 60px;
    display: flex;
    ${mobile({
        padding: "10px",
        flexDirection: "column"
    })}
`;
const ImageContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    border-radius:5px;
    object-fit: cover;
    ${mobile({
        height: "40vh",
    })}
`;
const InfoContainer = styled.div`
    margin-top: 30px;    
    flex: 1;
    padding: 0px 50px;
    ${mobile({
        padding: "10px",
    })}
`;
const Title = styled.h1`
    font-weight: 500;
    
`;
const Desc = styled.p`
    display:flex;
    font-size:20px;
    margin: 10px 0;
`;
const Ratingbox = styled.div`

`;

const Stock = styled.div`
    margin: 10px 0;
    font-weight: 600;
    display: flex;
    font-size:20px;
`;

const Price = styled.span`
    font-weight: 400;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({
        width: "100%",
    })}
`;
const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height:1px;
    margin:5px 0;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
    ${mobile({
        padding: "0 5px"
    })}
   
`;
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:600;
`;
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
    ${mobile({
        width:"15px",
        height:"15px"
    })}
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px 8px;
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
    display: flex;
    width: 50%;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        width: "108%",
    })}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight:700;
    cursor:pointer;
`;
const Amount = styled.span`
    width:30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px!important;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight:500;
    cursor:pointer;

    &:hover{
        background-color: #E9F6F6;
    }
`;  


const Product = () => {
    const location= useLocation();
    const id = location.pathname.split("/")[2];

    //HOOKS
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispath = useDispatch();

    useEffect(() => {
       const getProduct = async()=> {
           try {
            const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
                // console.log(res.data);
           } 
           catch (err) {
                console.log(err);   
           }
        };  
        getProduct();
    }, [id])

    // quantity function
    const handleQuantity= (type)=>{
        if(type==="dec"){
           quantity>1 &&  setQuantity(quantity-1);
        }
        else if( type==="inc"){
            setQuantity(quantity+1)
        }
    }

    //Add to cart button function
    const handleAdd = ()=>{
        //update cart when user clicks on ADD TO CART
        dispath(
            addProduct({...product,quantity, color,size})
        )
    }

    let stock = product.inStock;
    if(stock){
        stock ="inStock";
    }
    else
    {
        stock = "outOfStock";
    }
    return (
        <Container>
            <Navbar data= {searchLinks}/>
            <Announcement/>

            <Wrapper>
                <ImageContainer><Image src={product.img}/></ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Hr/> 
                    <Ratingbox><Rating name="read-only" value={product.rating || 3} readOnly/></Ratingbox>
                    <Hr/> 
                    <Price>₹ {product.price}</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            {product.color?.map(c=>(
                                <FilterColor 
                                color={c} 
                                key={c} 
                                onClick={()=>setColor(c)}    
                                />
                            ))}
                        </Filter>

                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                               {product.size?.map(s=>(
                                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                               ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=> handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=> handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleAdd}>ADD TO CART</Button>
                    </AddContainer>
                    <Hr/>
                    <Stock> <h4 style={{marginRight:"5px"}}>Stock: </h4>
                        <h4 style={{color: product.inStock? "green" : "red"}}> {stock}</h4>        
                    </Stock>
                    <Hr/>
                    <Desc><h4 style={{marginRight:"5px"}}>Description:</h4> {product.desc}</Desc>            

                </InfoContainer>    
            </Wrapper>

            <Impact/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
