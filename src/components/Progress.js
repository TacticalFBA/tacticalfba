import React, { Component } from 'react'
import styled from "styled-components"

export default class Progress extends Component {

    state = {
        className: {
            insert: "col-3 active",
            address: "col-3",
            cart: "col-3",
            checkout: "col-3"
        }
    }

    componentDidMount() {
        this.activeClass();
    }

    activeClass = () => {
        if (this.props.page === "address") {
            this.setState({
                className: {
                    insert: "col-3 pointer active",
                    address: "col-3 active",
                    cart: "col-3",
                    checkout: "col-3"
                }
            })
        }
        if (this.props.page === "cart") {
            this.setState({
                className: {
                    insert: "col-3 pointer active",
                    address: "col-3 pointer active",
                    cart: "col-3 active",
                    checkout: "col-3"
                }
            })
        }
    };

    render() {
        return (
            <ProgressBar className="row mx-0 justify-content-center">

                <div className={this.state.className.insert}
                    onClick={() => this.props.history.push("/insert")}
                >
                    Design Insert
                </div >
                <div className={this.state.className.address}
                    onClick={() => this.props.history.push("/address")}
                >
                    Factory Address</div>
                <div className={this.state.className.cart}>Choose Quantitiy</div>
                <div className={this.state.className.checkout}>Check Out</div>

            </ProgressBar >
        )
    }
}

const ProgressBar = styled.div`

width:100%;
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
    padding:.5rem;
    background: var(--mainGrey);
    color: var(--mainWhite);
    font-weight: 700;
    font-size: .8rem;
    text-align: center;
}
.active {
    background: var(--mainOrange);
}
`