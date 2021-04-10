import React from "react"
import ImageAboutMe from "./imageAboutMe"
import { Container, Title, Text } from "../../styles/generalContainer.js"

export default function AboutMe () {
    return(
        <Container>
            <Title>
                Este es un About Me 🤍
            </Title>
            <ImageAboutMe />
            <Text>
                Ut eu aliquet nunc. Sed quis varius sem. Etiam elit magna, consectetur in turpis quis, fermentum rutrum lacus. Etiam in neque sit amet dolor congue semper mollis non dolor. In a quam sapien. In hac habitasse platea dictumst. Aliquam pellentesque, odio at interdum varius, leo tellus pharetra nisi, eget bibendum enim risus non est. In nisi ante, venenatis eu sodales in, rutrum nec risus. Praesent ac lacus eu diam ullamcorper tempor. In et facilisis urna, sit amet semper mi. Vivamus vehicula enim non enim congue finibus. Donec pharetra arcu a commodo vulputate. Sed nec hendrerit sem. Maecenas sit amet orci tempor, bibendum nisi eget, tristique enim. Mauris quis volutpat odio, at rhoncus nulla.
            </Text>
        </Container>
    )
}