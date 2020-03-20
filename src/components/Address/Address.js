import React from 'react'
import { FullPageContainer } from "../Styled/FullPageContainer"
import { UserConsumer } from "../../context";
import styled from "styled-components"

import AddressForm from "./AddressForm"
import AddressList from "./AddressList"

export default function Address({ match, history }) {


    return (
        <FullPageContainer>
            <AddListContainer>
                <UserConsumer>{
                    ({ user, addList }) => {
                        if (addList.length > 0) {
                            return (<AddressList user={user} addList={addList} match={match} history={history} />)
                        }
                    }}
                </UserConsumer>
            </AddListContainer>
            <AddressForm />
        </FullPageContainer>
    )
}

const AddListContainer = styled.div`
    width: 70%;
    margin-bottom: 5rem;
`