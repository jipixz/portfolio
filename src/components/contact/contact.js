import React from "react"
import styled from "styled-components" 

const Container = styled.div`
    position: absolute;
    width: 100%;
    display: flexbox;
`

export default function Contact () {
    return(
        <Container>
            <h1>Soy un Contact</h1>
        </Container>
    )
}