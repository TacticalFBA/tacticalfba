import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Cover() {
    return (
        <CoverWrapper>
            <div className="text-wrap">
                <h2>Get more reviews with TacticalFBA</h2>
                <p className="lead">Research shows that well-worded product inserts help to increase the frequency of Amazon
                reviews. We can
                help design, print, and ship your product insert directly to your factory in China for immediate
                packaging.
          </p>
                <Link to="/new-card" className="btn btn-primary">Get Started</Link>
            </div>
        </CoverWrapper>
    )
}

const CoverWrapper = styled.div`
    position: relative;
    background: url(img/sample.jpg) no-repeat center center fixed;
    width: 100%;
    height: 100vh;
    background-size: cover;
    // &::after {
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     content: "";
    //     background-color: rgba(255,255,255,.2);
    //     z-index: 1;
    //     width: 100%;
    //     height: 100%;
    // }
    .text-wrap {
        position: absolute;
        left: 70%;
        top: 50%;
        z-index: 2;
        transform: translate(-50%,-50%);
        width: 50%;
        p {
            margin: 50px 0 60px;
            font-weight: 400;
        }
    }
    @media (max-width: 768px) { 
        text-align: center;
        .text-wrap {
            left: 50%;
            width: 70%;
            p {
                margin: 20px 0 40px;
            }    
        }

    
`