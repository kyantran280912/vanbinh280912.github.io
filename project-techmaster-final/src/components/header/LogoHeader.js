import React from 'react'
import styled from "styled-components";
import Logo from '../../assets/image/logocircle.png'


const LogoHeader = () => {
  return (
    <BoxLogo>
        <img src={Logo} alt="" />
    </BoxLogo>
  )
}
const BoxLogo = styled.div`
    max-width: 50px;
    
`

export default LogoHeader