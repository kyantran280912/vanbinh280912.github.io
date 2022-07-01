import React from 'react'
import styled from "styled-components";
import { Icon } from '@iconify/react';

const ButtonSeeMore = (props) => {
  return (
    <Button>
        {props.children}
        <Icon icon='akar-icons:chevron-down'></Icon>
    </Button>
  )
}
const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 0 5px;
    color: ${({ theme }) => theme.textnote};
    background: transparent;
    border: none;
    font-weight: 500;
    line-height: 20px;
    font-size: 16px;
    svg{
        transform: rotate(270deg);
    }
    :hover{
        color: ${({ theme }) => theme.pri};
    }

`
export default ButtonSeeMore