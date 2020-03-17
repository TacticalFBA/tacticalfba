import React from 'react'
import styled from "styled-components"

export default function Fixed() {
    return <FixedWrapper></FixedWrapper>
}

const FixedWrapper = styled.div`
    background: url(/img/cover.jpg) no-repeat center center fixed;
    width: 100%;
    height: 40vh;
    background-size: cover;
    `