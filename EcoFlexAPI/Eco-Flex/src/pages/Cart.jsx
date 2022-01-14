import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Favorite, Remove, ShoppingBag, } from '@mui/icons-material';
import {mobile} from "../Responsive";
import { useSelector,useDispatch } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';
import {userRequest} from "../requestMethod";
import { useNavigate,Link } from 'react-router-dom';
import { searchLinks } from '../data';
import { removeProduct } from '../redux/cartRedux';
import { toast } from "react-toastify";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
        padding: "10px",
    })}
`;
const Title = styled.h1`
    font-weight: 500;
    text-align:center;
    ${mobile({
        fontSize: "25px",
    })}
`;
const Top = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding: 20px;
`;
const TopBotton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border: ${props=>props.type==="filled" && "none"};
    background-color: ${props=>props.type==="filled"?"black":"transparent"};
    color: ${props=>props.type==="filled" && "white"};
    ${mobile({
        fontSize: "10px",
    })}

`;
const TopTexts = styled.div`
    ${mobile({
        display: "none",
    })}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;
const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 0 15px;
    ${mobile({
        flexDirection: "column",
    })}
`;

const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    border-bottom: 1px solid grey;
    background-color:#F4F9F9;
    border-radius: 5px;
    display:flex;
    justify-content:space-between;
    ${mobile({
        flexDirection: "column",
        margin:"5px"
    })}
`;
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`;
const Image = styled.img`
    width:150px;
    border-radius:5px;
    ${mobile({
        margin:"20px 5px 20px 20px"
    })}
`;
const EmptyImage = styled.img`
    width:60%;
    border-radius:5px;
    ${mobile({
        alignItem:"center",
        width:'200px',
        margin:"20px 5px 20px 20px",
    })}
`;
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    ${mobile({
        padding:"10px"
    })}
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
    display: inline-block;
    width:15px;
    height:15px;
    border-radius:50%;
    background-color: ${props=>props.color};
`;
const ProductSize = styled.span`

`;
const PriceDetail = styled.span`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:20px;
`;
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({
        margin: "5px 15px",
        fontSize: "18px"
    })}

`;
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:400;
    ${mobile({
        marginBottom: "20px",
        fontSize: "20px"
    })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height:1px;
    margin:5px;
`;

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    margin-left: 10px;
`;

const SummaryTitle = styled.h1`
    font-weight: 600;
    text-align: center;
`;
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"}
`;
const SummaryItemPrice = styled.span`

`;
const SummaryItemText = styled.span`

`;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color:black; 
    color:white;
    font-weight:600;
    cursor: pointer;
    border:none;

    &:hover{
        background-color: teal;
    }
`;
const Removebtn = styled.button`
    margin:50px;
    padding: 10px;
    background-color:black; 
    color:white;
    font-weight:600;
    cursor: pointer;
    border-radius: 20px;
    height: 40px;

    &:hover{
        background-color: teal;
    }
`;



const Cart = () => {
    
    const cart = useSelector((state)=>state.cart);   //For cart items
    const userLogin = useSelector((state)=>state.user.currentUser); //to check if user if loggedIn
    const [stripeToken, setStripeToken] = useState(null); //for payment
   
   let loggedIn=false; 
   const checkUser = () =>{
       if(userLogin===null){
          toast.error("You are not Logged in. Login First",{position:"top-center"});
           navigate("/login");
       }
       return loggedIn = true;
    }
    console.log(loggedIn);

   const dispatch = useDispatch();
   const handleRemove = (id) =>{
        dispatch(removeProduct(id));
        // console.log(id);
   }
   
   
   const onToken = (token) =>{
     loggedIn && setStripeToken(token); 
   }
    // const history = useNavigate();
    const navigate = useNavigate();


    //token returns on successful order placing
    // console.log(stripeToken); 

    useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await userRequest.post("/checkout/payment", {
              tokenId: stripeToken.id,
              amount: 500,
            });

            navigate("/success", {state:res});
          } 
          catch(err)
          {
              console.log(err);
          }
        };
        stripeToken && makeRequest();
      }, [stripeToken, cart.total , navigate]);

    return (
        <Container>
            <Navbar data={searchLinks}/>
            <Announcement/>
        
                <Wrapper>
                    <Title>YOUR CART</Title>
                    <Top>
                    <Link to="/products"><TopBotton>CONTINUE SHOPPING</TopBotton></Link>
                        
                        <TopTexts>
                            <TopText><ShoppingBag style={{margin:"-3px 2px", color: "teal"}}/> BAG({cart.quantity})</TopText>
                            <TopText><Favorite style={{margin:"-3px 2px", color: "red"}}/> WISHLIST(0)</TopText>
                        </TopTexts>
                           <StripeCheckout
                                name="Ecofelx"
                                image="https://avatars.githubusercontent.com/Ardent10"
                                billingAddress
                                shippingAddress
                                description={`Your total is ₹ ${cart.total}`}
                                currency="INR"
                                amount={cart.total*100}
                                token={onToken}
                                stripeKey={KEY}>
                                <TopBotton type="filled">CHECKOUT NOW</TopBotton>
                            </StripeCheckout>
                    </Top>
                    <Bottom>
                    
                        {cart.products.length=== 0? 

                          (
                            <Info>
                                <h2>Your Cart is Empty</h2> 
                                <EmptyImage src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png' alt=''/>
                            </Info>
                          ) :(
                              
                            <Info>
                            
                            {cart.products.map((product)=>(
                                <Product key={product._id}>
                                    <ProductDetail>
                                        <Image src={product.img}/>
                                        <Details>
                                            <ProductName><b>Product:</b> {product.title}</ProductName>
                                            <ProductId><b>ID:</b> {product._id}</ProductId>
                                            <ProductId><b>Color:</b> <ProductColor color={product.color}/></ProductId>                                          
                                            <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                        </Details>
                                        <Removebtn onClick={()=>handleRemove(product._id)}>Remove</Removebtn>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <Hr/>
                                        <ProductAmountContainer>
                                            <Remove/>
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <Add/>
                                        </ProductAmountContainer>
                                        <ProductPrice>
                                            ₹ {product.price*product.quantity}
                                        </ProductPrice>
                                    </PriceDetail>
                                </Product>
                            ))}
                                    <Hr/>   
                        
                        </Info>)
                        
                        }
                        
                        <Summary>
                        
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                            <SummaryItem>
                                <SummaryItemText>Subtotal: </SummaryItemText>
                                <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
                            </SummaryItem>

                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping: </SummaryItemText>
                                <SummaryItemPrice>₹ 150.90</SummaryItemPrice>
                            </SummaryItem>
                            
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount: </SummaryItemText>
                                <SummaryItemPrice>-₹ 150.90</SummaryItemPrice>
                            </SummaryItem>
                            <Hr/>
                            <SummaryItem type="total">
                                <SummaryItemText >Total: </SummaryItemText>
                                <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
                            </SummaryItem>

                            <StripeCheckout
                                name="Ecofelx"
                                image="https://avatars.githubusercontent.com/Ardent10"
                                billingAddress
                                shippingAddress
                                description={`Your total is ₹ ${cart.total}`}
                                currency="INR"
                                amount={cart.total*100}
                                token={onToken}
                                stripeKey={KEY}>
                                <Button onClick={checkUser}>CHECKOUT NOW</Button>
                            </StripeCheckout>

                        </Summary>
                    </Bottom>
                </Wrapper>
        

            <Footer/>
        </Container>
    )
}

export default Cart
