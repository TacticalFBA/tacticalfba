import React from 'react'
import { UserConsumer } from "../../context/userContext";

import AddressForm from "./AddressForm"
import AddressList from "./AddressList"

export default function Address({ match, history }) {
    return (
        <div className="container mt-5">
            <UserConsumer>{
                ({ addList }) => {
                    if (addList.length > 0) {
                        return (<AddressList addList={addList} match={match} history={history} />)
                    }
                }}
            </UserConsumer>
            <AddressForm />
        </div>
    )
}
