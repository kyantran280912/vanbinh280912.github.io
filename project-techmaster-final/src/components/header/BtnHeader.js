import React from 'react'
import styled from "styled-components";
import Button from '../button/Button';


const BtnHeader = () => {
  return (
    <BoxBtn>
        <Button textbutton='Đăng nhập' btnsecond/>
        <Button textbutton='Đăng kí' btnprimary/>
    </BoxBtn>
  )
}
const BoxBtn = styled.div`

`

export default BtnHeader