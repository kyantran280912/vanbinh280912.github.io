import React from 'react'
import styled from "styled-components";
import { Icon } from "@iconify/react";


const Input = (props) => {
  return (
    <InputStyle>
        <Icon icon='eva:search-fill' fontSize={10}></Icon>
            <InputPri placeholder={
                props.placeholder
            }>
            </InputPri>
    </InputStyle>
  )
}
const InputStyle = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.bginput};
    border-radius: 5px;
    padding: 8px 10px;
    svg{
        font-size: 18px;
        color: ${({ theme }) => theme.textnote};
        margin-right: 8px;
    }
`
const InputPri = styled.input`
    background: transparent;
    outline: 0;
    border: none;
    width: 80%;
    color: ${({ theme }) => theme.text};
    ::placeholder{
        font-size: 14px;
        font-weight: 500;
        font-family: 'Inter'
    }
`

export default Input