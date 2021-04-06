import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
    margin: auto 0;
    flex: 0 1 36px;

    @media (max-width: 768px) and (orientation: landscape) {
        flex: 0 1 25px;
    }
`

export default function Logo () {
    const data = useStaticQuery(graphql`
        query {
            file(name: { eq: "logo" },extension: { eq: "png" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, width:60)
                }
            }
        }
    `)
    return (
        <LogoWrap as={Link} to="/">
            <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="logo"/>
        </LogoWrap>
    )
}