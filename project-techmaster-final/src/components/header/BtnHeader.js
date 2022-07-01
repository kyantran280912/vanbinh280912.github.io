import { Icon } from '@iconify/react';
import React from 'react'
import styled from "styled-components";
import Button from '../button/Button';
import SwitchMode from './SwitchMode';

const BtnHeader = (props) => {
  return (
    <BoxBtn>
      <div className="button"><Button textbutton='Đăng nhập' btnsignin={true} /></div>
      <div className="button">
      <Button textbutton='Đăng kí' />
      </div>
      <QrCode>
        <Icon icon='ant-design:download-outlined'></Icon>
      </QrCode>
      <SwitchMode themeToggler={props.themeToggler}></SwitchMode>
    </BoxBtn>
  )
}
const BoxBtn = styled.div`
  display: flex;
  gap: 0 5px;
  height: 100%;
  display: flex;
  align-items: center;
  button{
    height: 40px;
  }
`
const QrCode = styled.div`
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .2s;
  :hover{
    background: ${({ theme }) => theme.bginput};
    svg{
      color: ${({ theme }) => theme.pri};
    }
  }
 
  svg{
  font-size: 28px;
  line-height: 64px;
  }
`

export default BtnHeader