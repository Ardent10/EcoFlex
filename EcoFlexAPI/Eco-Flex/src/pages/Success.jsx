import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { userRequest } from '../requestMethod';
import { Link } from 'react-router-dom';

const Container = styled.div`
 background: linear-gradient(
                    rgba(255,255,255,0.5),
                    rgba(255,255,255,0.5)
                ), 
                url("https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
    height: 100vh;
    display: flex;
    color: teal;
    font-size : 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    padding: 10px;
    margin-top: 20px;
    background-color: teal;
    color: white;
    cursor:  pointer;

    &:hover{
        background-color: #1EA1A1;
    }

`;



const Success = () => {
    const location = useLocation();
    // console.log(location); // to see what state are being passed after placing an order

    const cart = useSelector((state)=>state.cart);
    const data = location.state;
    // console.log(data,cart);

    const currentUser = useSelector((state)=>state.user.currentUser);

    const [orderId, setOrderId] = useState(null);
    console.log(orderId);

    useEffect(() => {
    
        const createOrder = async () => {
            try {
              const res = await userRequest.post("/orders", {
              
                  userId: currentUser._id,
                  products: cart.products.map((item) => ({
                    productId: item._id,
                    quantity: item.quantity,
                })),
                amount: cart.total,
                address: data.billing_details.address,
              });
              setOrderId(res.data._id);
            } 
            catch(err) {
                console.log(err);  
          }
        };

        data && createOrder();
      }, [cart, data, currentUser]);


      return (
        <Container>
          {orderId
            ? `🎊Order has been created successfully. Your order number is ${orderId}`
            : `🎉Successfull. Your order is being prepared...`}
          <Link to="/">
            <Button>Go to Homepage</Button>
          </Link>
        </Container>
      );
    };
    
export default Success;