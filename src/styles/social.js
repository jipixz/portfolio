import styled from "styled-components"

export const TelegramStyles = styled.svg`
    transition: all 200ms ease-in;
    display: ${props => props.display || "block"};
    fill: ${props => props.fill || "white"};
    width: ${props => props.width || "30px"};
    height: ${props => props.height || "30px"};
    margin: ${props => props.margin || "1rem"};
    padding: ${props => props.padding || "0"};
    stroke: ${props => props.stroke || 'none'};
    stroke-linecap: ${props => props.linecap || 'round'};
    stroke-linejoin: ${props => props.linejoin || 'round'};
    stroke-width: ${props => props.strokeWidth || 'default'};
    overflow: show;
    position: ${props => props.position || "relative"};
    z-index: ${props => props.zindex || "0"};

    :hover {
        filter: drop-shadow(0 0 20px #7eaad6);
        fill: #3099D7;
    }
`

export const GithubStyles = styled.svg`
    transition: all 200ms ease-in;
    display: ${props => props.display || "block"};
    fill: ${props => props.fill || "white"};
    width: ${props => props.width || "30px"};
    height: ${props => props.height || "30px"};
    margin: ${props => props.margin || "1rem"};
    padding: ${props => props.padding || "0"};
    stroke: ${props => props.stroke || 'none'};
    stroke-linecap: ${props => props.linecap || 'round'};
    stroke-linejoin: ${props => props.linejoin || 'round'};
    stroke-width: ${props => props.strokeWidth || 'default'};
    overflow: show;
    position: ${props => props.position || "relative"};
    z-index: ${props => props.zindex || "0"};
    :hover {
        filter: drop-shadow(0 0 20px #7F87CD);
        fill: #7F87CD;
    }
`

export const LinkedinStyles = styled.svg`
    transition: all 200ms ease-in;  
    display: ${props => props.display || "block"};
    fill: ${props => props.fill || "white"};
    width: ${props => props.width || "30px"};
    height: ${props => props.height || "30px"};
    margin: ${props => props.margin || "1rem"};
    padding: ${props => props.padding || "0"};
    stroke: ${props => props.stroke || 'none'};
    stroke-linecap: ${props => props.linecap || 'round'};
    stroke-linejoin: ${props => props.linejoin || 'round'};
    stroke-width: ${props => props.strokeWidth || 'default'};
    overflow: show;
    position: ${props => props.position || "relative"};
    z-index: ${props => props.zindex || "0"};
    :hover {
        filter: drop-shadow(0 0 20px #1773d1);
        fill: #1773d1;
    }
`

export const LogoWrap = styled.a`
    margin: auto 0;
    flex: 0 1 60px;
    cursor: pointer;


    @media (max-width: 1280px) and (orientation: landscape) {
        flex: 0 1 40px;
    }

    @media (max-width: 1280px) and (orientation: portrait) {
        flex: 0 1 40px;
    }
`