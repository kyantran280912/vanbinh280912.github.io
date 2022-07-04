import React from 'react'
import styled from "styled-components";


const TitleSection = ({ children }) => {
  return (
    <H2>
      {children}
    </H2>
  )
}
const H2 = styled.h2`
    line-height: 48px;
    font-size: 40px;
    color: ${({ theme }) => theme.text};
`
export default TitleSection