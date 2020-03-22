import React from 'react'
import styled from "styled-components"

export default function Orders({ orders }) {
    return (
        <div className="mt-5">
            {orders.map(order => {
                return (
                    <Wrapper key={order.oid}>
                        <div>Order submitted on {order.info.date} at {order.info.time}</div>
                        <div>{order.items.map((item, index) => {
                            return (
                                <div key={item.cid}>
                                    <span>Product {index + 1}: {item.name} - {item.type}</span> |
                                    <span>Template: {item.templateName}</span> |
                                    <span>Send to: {item.factory}</span> |
                                    <span>Count: {item.count}</span>
                                </div>
                            )
                        })}</div>
                        <div><strong>Total Products: {order.items.length}</strong></div>
                        <div><strong>Order Total: $ {order.info.total}</strong></div>
                        <div>Shipping status</div>
                    </Wrapper>
                )
            })}
        </div>
    )
}

const Wrapper = styled.div`
    border: 1px solid #ccc;
    padding: 2rem;
    margin-bottom: 1rem;

`