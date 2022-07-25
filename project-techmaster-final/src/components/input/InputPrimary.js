import React from 'react'
import styled from "styled-components";
import { useController } from "react-hook-form"
import PropTypes from "prop-types";

/**
 *
 * @param {*} placeholder(optional) - Placeholder of input
 * @param {*} name(optional) - name of input
 * @param {*} control - control from react hook form
 * @returns Input
 */
const InputPrimary = ({ placeholder, type = 'text', name = '', control, children, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: ""
  })
  return (
    <InputStyle>
      <InputPri placeholder={placeholder}
        type={type}
        id={name}
        {...field}
        {...props}
      >
      </InputPri>
      {
        children
      }
    </InputStyle>
  )
}
const InputStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.bginput};
    border-radius: 5px;
    width: 100%;
    height: 100%;
    padding: 8px 10px;
    border: 1px solid ${({ theme }) => theme.textnote};
    :hover{
      border: 1px solid ${({ theme }) => theme.pri};
    }
    :focus-within{
      border: 1px solid ${({ theme }) => theme.pri};
    }
    .input-icon{
      margin-right: 10px;
      font-size: 22px;
      cursor: pointer;
      color: ${({ theme }) => theme.text};
    }
  
`
const InputPri = styled.input`
    background: inherit;
    outline: 0;
    border: none;
    width: 100%;
    color: ${({ theme }) => theme.text};
    ::placeholder{
        font-size: 14px;
        font-weight: 500;
        font-family: 'Inter'
    }
    
`

export default InputPrimary