import React from 'react'
import { UserConsumer } from "../../contexts/UserContext"

export default function FinishSignUp() {
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
