import { FacebookOutlined, Instagram, Twitter, Pinterest,Room,Phone,MailOutlined,Copyright} from '@mui/icons-material';
import React from 'react';
import styled from "styled-components"; 
import {mobile} from "../Responsive";
import {Link} from "react-router-dom";

const MainContainer = styled.div``;

const Container = styled.div` 
    display: flex;
    background-color: #E9F6F6;
    ${mobile({
        flexDirection: "column"
        
    })};
`;
const Left = styled.div` 
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props=>props.color};
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    cursor: pointer;

    &:hover{
        background-color: #BDD2B6;
    }
`;
const Center = styled.div` 
    flex: 1;
    padding: 20px;
    ${mobile({
        display: "none",

        
    })};
`;

const Title = styled.h3`
    margin-bottom: 30px;
    text-align: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
    margin: 0 68px;
  flex-wrap: wrap;
`;


const ListItems = styled.li`
  flex-direction: column;
  margin-bottom: 10px;
`;

const   Right = styled.div` 
    flex: 1;
    padding: 20px;
    ${mobile({
        backgroundColor: "#fff8f8"
        
    })};
`;

const ContactItem =styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Image = styled.img`
    width: 25px;
    height: 25px;
    transform: rotate(45deg);
    margin: 0 5px;
    ${mobile({
        margin:"2px",
    })}
`;

const Bottom = styled.div`
    height:30px;
    background-color: teal;
    color: white;
    font-weight: 500;
    padding: 12px;
    display:flex;
    justify-content:center;
`;

const Footer = () => {
    var year = new Date().getFullYear();
    return (
        <MainContainer>

        <Container>
            <Left>
                <Logo>EcoFlex.</Logo>
                
                <Desc>We the people of India pledge to make environment
                      better by promoting brands, merchandise that are 
                      100% organic and It should not harm the environment 
                      by any means. Join our cause to make our Country a  
                      Carbon negative one. 
                </Desc>

                <SocialContainer>
                    <SocialIcon color= "3B5999">
                        <FacebookOutlined />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            
            <Center>
                <Title>Links</Title>
                <List>
                    <Link to="/"><ListItems>Home</ListItems></Link>
                    <Link to="/cart"><ListItems>Cart</ListItems></Link>
                    <Link to="/products/men"><ListItems>Mens Fashion</ListItems></Link>
                    <Link to="/products/women"><ListItems>Women Fashion</ListItems></Link>
                    <Link to="/products/home"><ListItems>Home Decor</ListItems></Link>
                    <Link to="/products/travel"><ListItems>Travel</ListItems></Link>
                </List>
                <List>
                    <Link to="/impact"><ListItems>Our Impact</ListItems></Link>
                    <Link to="/"><ListItems>My Account</ListItems></Link>
                    <Link to="/"><ListItems>Join Us</ListItems></Link>
                    <Link to="/cart"><ListItems>Track Order</ListItems></Link>
                    <Link to="/"><ListItems>Terms</ListItems></Link>
                    <Link to="/"><ListItems>Donate</ListItems></Link>
                </List>
            </Center>
            
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: "10px"}}/> 262 Ompro Tower, South Hall 110185</ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}}/> +91 123 456 789</ContactItem>
                <ContactItem><MailOutlined style={{marginRight: "10px"}}/> ecoflex@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
            
            </Container>
            
            <Bottom>
                   <Copyright style={{fontSize:"16px", margin: "2px 5px"}}/>EcoFlex {year} | The Ethical Shopping Store  
                   <Image src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-leaf-oktoberfest-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt='footer-img'/>
            </Bottom>
        </MainContainer>
    )
}

export default Footer
