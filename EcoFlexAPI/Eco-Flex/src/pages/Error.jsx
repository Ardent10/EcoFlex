import React from 'react';
import styled from 'styled-components';

const A = styled.a`
    position: absolute!important;
    margin: 4% 44%; 
    border: 1px solid black;
    padding: 16px!important;
    background-color: black;
    border-radius: 5px;
    text-align: center;
    color: #5d97d7;

`;

const Error = () => {
    return (

        <div className="wrapper">
            <div className="info">
                <A href="/">Back to Home page</A>
            </div>
            <img src="https://miro.medium.com/proxy/0*Vio_q5nMzzD4DkWO.JPG" alt=""/>
        </div>
    )
}

export default Error;
