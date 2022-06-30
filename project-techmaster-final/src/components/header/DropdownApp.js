import React from 'react'
import styled from "styled-components";


const DropdownApp = () => {
  return (
    <BoxDropdown>

    </BoxDropdown>
  )
}
const BoxDropdown = styled.div`
    padding: 28px 24px;
    background: ${({ theme }) => theme.bginput};
    height: 462px;
    width: 600px;
`
export default DropdownApp