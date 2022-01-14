import React from 'react';
import styled from "styled-components";
import {mobile} from "../Responsive";

const Container = styled.div`
    background-color: #E9F6F6;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Main = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 50px 20px;
    margin: 0 100px;
    background-color: #fff;
    border-radius: 10px ;
    margin-bottom: 65px;
    ${mobile({
        padding: "10px 13px",
        flexDirection: "column",
    })};

`;
const Image = styled.img`
    height: 550px;
    border-radius: 10px;
    box-shadow: 3px 1px 20px;
    ${mobile({
        height: "450px",
        width:"300px"
    })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    ${mobile({
        padding: "10px 0",
        flex: "wrap",
    })};
`;
const Title = styled.h1`
    text-align:center;
    padding: 15px;
    font-size: 50px;
    ${mobile({
        fontSize: "45px",
        
    })};
`;
const Desc = styled.div`
    font-size: 22px;
    line-height: 30px;
    ${mobile({
        textAlign: "center",
        fontSize: "16px",
        width: "100%"
    })};
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Our Impact</Title>
            <Main>

            <Wrapper>
                <Desc>
                The <strong>World Commission</strong> on Environment and Development 
                popularized this concept in 1987. Their report defines 
                the idea as a “development which meets the needs of the 
                present without compromising the ability of future 
                generations to meet their needs.” <br/>
                The longer we continue to pursue unsustainable 
                development, the more severe will the consequences be. 
                One of the most common is <strong>climate change</strong> which is being 
                debated widely worldwide.In fact, climate change is already 
                wreaking havoc on our surroundings. So, the need of the 
                hour is sustainable development. <br/>
                We at <strong>Ecoflex</strong> have sworn 
                to protect our environment by promoting goods, and merchandise 
                that are eco-friendly so that we can only promote and make only 
                those products that are reusable and by no means harms our precious 
                environment. 
                <li>  This initiative makes clothes and goods via recycling 
                process and promote handmade goods made by small sellers.</li>
                <li>This not only helps the environment but also the small business who find it 
                hard to sell their goods.</li>
                <li>Till now we have recycled around 2Million 
                tons of plastics from the oceans and recycled them converted them into 
                looms and converted them into fibers thus making them usefull in 
                making nylon clothes and shoes.</li>
                
                </Desc>
          </Wrapper>
            <Wrapper>
                <Image src="https://images.pexels.com/photos/8207648/pexels-photo-8207648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            </Wrapper>
            </Main>
        </Container>
    )
}

export default Newsletter
