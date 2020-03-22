import React from 'react'
import { UserConsumer } from "../../context"

export default function Confirm() {
    return (
        <div>
            <UserConsumer>
                {({ SignIn }) => {
                    return (
                        <button onClick={() => SignIn()}>Sign In</button>
                    )
                }}
            </UserConsumer>
        </div>
    )
}
