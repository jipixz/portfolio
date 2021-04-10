import React from "react"
import { Container, Title, LinkedinLinkStyle, Social } from "../../styles/footer.js"
import Github from "./social/github"
import Linkedin from "./social/linkedin"
import Telegram from "./social/telegram"

export default function Footer () {
    return(
        <Container>
            <Social>
                <Github 
                    fill= "white"
                    width= "30px"
                    height= "30px"
                    name="GitHub"
                />
                <Linkedin 
                    fill= "white"
                    width= "30px"
                    height= "30px"
                    name="Linkedin"
                />
                <Telegram 
                    fill= "white"
                    width= "30px"
                    height= "30px"
                    name="Linkedin"
                />
            </Social>
            <Title>Made with 💜 by  
                <LinkedinLinkStyle href="https://www.linkedin.com/in/jipixz" target="_blank">Gibrán Ramón</LinkedinLinkStyle>
            </Title>
        </Container>
    )
}