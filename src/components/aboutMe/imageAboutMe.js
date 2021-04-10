import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0 0 10px #FEB8FF);
    width: 100%;
    height: auto;
`

export default function ImageAboutMe () {
    const data = useStaticQuery(graphql`
        query{
            file(name: {eq: "about"}, extension: {eq: "png"}) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED
                                    width: 180
                                    placeholder: BLURRED	
                                    quality: 100
                    )
                }
            }
        }
    `)
    return (
        <ImageWrap>
            <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="About Me" />
        </ImageWrap>
    )
}