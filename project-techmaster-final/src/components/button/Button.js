import React from 'react'
import {styled, css} from "styled-components";


const Button = (props) => {
  return (
    <ButtonPri>
        {props.textbutton}
    </ButtonPri>
  )
}
const ButtonPri = styled.button`
    border-radius: 4px;
    padding: 0 20px;
    line-height: 32px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    ${props => props.btnsecond && css`
        background: ${({ theme }) => theme.pri};;
    `};
`

export default Button