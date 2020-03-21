import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { UserConsumer } from "../../context"

export default function Cover() {

    return (
        <CoverWrapper>
            <div className="text-wrap">
                <div>
                    <h2>Get more reviews with TacticalFBA</h2>
                    <p className="lead">Research shows that well-worded product inserts help to increase the frequency of Amazon
                    reviews. We can
                    help design, print, and ship your product insert directly to your factory in China for immediate
                    packaging.
          </p>
                </div>
                <UserConsumer>
                    {({ user, openModal }) => {
                        if (user === null) {
                            return (<button className="btn btn-orange" onClick={() => openModal()}>Get Started</button>)
                        } else {
                            return (<Link to="/new-card" className="btn btn-orange">Get Started</Link>)
                        }
                    }}
                </UserConsumer>
            </div>
        </CoverWrapper>
    )
}

const CoverWrapper = styled.div`
    height: 96vh;
    position: relative;
    background: url(img/coverD.jpg) no-repeat center center fixed;
    width: 100%;
    background-size: cover;

    .text-wrap {
        position: absolute;
        left: 70%;
        top: 50%;
        z-index: 2;
        transform: translate(-50%,-50%);
        width: 30%;
        p {
            margin: 50px 0 60px;
            font-weight: 400;
        }
    }
    @media (max-width: 768px) { 
        background: url(img/coverM.jpg) no-repeat bottom center fixed;
        background-size: cover;
        text-align: center;
        .text-wrap {
            left: 50%;
            width: 70%;
            p {
                margin: 20px 0 40px;
            }    
        }

    
`