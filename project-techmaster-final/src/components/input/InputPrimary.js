import React from 'react'
import styled from "styled-components";
const InputPrimary = (props) => {
  return (
    <InputStyle>
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
    width: 100%;
    padding: 8px 10px;
    border: 1px solid ${({ theme }) => theme.textnote};
    :hover{
      border: 1px solid ${({ theme }) => theme.pri};
    }
    :focus-within{
      border: 1px solid ${({ theme }) => theme.pri};
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

export default InputPrimary