import React from 'react'
import styled from "styled-components"

export default function Shipping() {
    return (
        <ShippingWrapper className="juzhong">
            <div className="container">
                <h4>FREE shipping to your factory in China</h4>
                <p className="lead">Because our printing press is located in China, after we finish printing your order we will
                ship it
                straight to your factory for them to insert into each of your product packages. This should be a
                complimentary service that your factory provides.
          </p>
            </div>
        </ShippingWrapper>
    )
}

const ShippingWrapper = styled.div`
position: relative;
width: 100%;
height: 70vh;
background-color: rgba(242,81,52,.5);
color:#333;
text-align: center;
&::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(242,81,52,.5);
}
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
i {
    font-size: 3rem;
    margin-bottom: 3rem;
}
h4 {
    margin-bottom: 30px;
    font-size:1.75rem;
    &::before {
        content: '';
        display: block;
        margin: 0 auto 30px;
        background: url(img/free-shipping.png) no-repeat center center;
        width: 50px;
        height: 50px;
        background-size: cover;
    }
    &::after{
        content: '';
        display: block;
        margin: 0 auto;
        width: 50px;
        height: 20px;
        border-bottom: 4px solid #333;
    }
}
p {
    display: block;
    margin: 0 auto;
    width: 70%;
}
`