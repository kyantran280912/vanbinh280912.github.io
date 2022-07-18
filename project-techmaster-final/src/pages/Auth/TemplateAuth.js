import React from 'react'
import styled from "styled-components";
import Logo from '../../../src/assets/image/logocircle.png'

const TemplateAuth = ({children}) => {
  return (
    <Main>
    <Left>
        {children}
    </Left>
    <Right>
    <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="text">
            Flowcash
        </div>
    </Right>
    </Main>
  )
}
const Main = styled.div`
    display: flex;
`
const Left = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Right = styled.div`
    width: 50%;
    background: ${({ theme }) => theme.blue};
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .logo{
        max-width: 300px;
        margin: 0 auto;
    }
    .text{
        font-size: 80px;
        font-weight: 600;
        color: ${({ theme }) => theme.pri};
        text-align: center;
    }
`
export default TemplateAuth