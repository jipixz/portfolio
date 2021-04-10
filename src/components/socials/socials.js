import React from "react"
import styled from "styled-components"
import Github from "../footer/social/github"
import Linkedin from "../footer/social/linkedin"
import Telegram from "../footer/social/telegram"

const Container = styled.div`
    display: block;
    padding-top: 2rem;
    background-color: #2F0C49;

    @media(max-width: 899px){
        display: none;
    }
`
const AsideItems = styled.div`
    position: sticky;
    top: 18rem;
`


export default function Socials () {
    return(
        <Container>
            <AsideItems>
                <Github 
                    fill= "white"
                    width= "35px"
                    height= "35px"
                    name="GitHub"
                    padding= ".8rem"
                    margin= "0"
                    zindex= "20"
                    position= "relative"
                />
                <Linkedin 
                    fill= "white"
                    width= "30px"
                    height= "30px"
                    name="Linkedin"
                    padding= "1rem"
                    margin= "0"
                    zindex= "20"
                    position= "relative"
                />
                <Telegram 
                    fill= "white"
                    width= "30px"
                    height= "30px"
                    name="Linkedin"
                    padding= "1rem"
                    margin= "0"
                    zindex= "20"
                    position= "relative"
                />
            </AsideItems>
        </Container>
    )
}