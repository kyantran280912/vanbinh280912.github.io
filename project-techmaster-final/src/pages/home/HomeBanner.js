import React from 'react'
import styled from "styled-components";

const HomeBanner = () => {
    return (
        <Section>
            <StyledOverlay>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" >
                    <path class="elementorShapeFill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </StyledOverlay>
        </Section>
    )
}
const StyledOverlay = styled.div`
    position: absolute;
    bottom: -1px;
    left:0;
    width: 100%;
    svg{
        transform:  rotateY(180deg);
        transform: rotateX(180deg);
        left: 50%;
        width: calc(100% + 1.3px);
        color: ${({ theme }) => theme.bg1};
        path{
            fill: ${({ theme }) => theme.bg};
        }
    }
`
const Section = styled.div`
    height: 800px;
    background-color: transparent;
    background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
    /* opacity: .8; */
    background: linear-gradient(to right, #A565F9 50%, #6247AA 100%);
    /* Created with https://www.css-gradient.com */
background: #C06DED;
background: -webkit-linear-gradient(top left, #C06DED, #34089E);
background: -moz-linear-gradient(top left, #C06DED, #34089E);
background: linear-gradient(to bottom right, #C06DED, #34089E);
    position: relative;
`

export default HomeBanner