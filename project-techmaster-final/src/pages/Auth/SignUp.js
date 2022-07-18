import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Button from '../../components/button/Button';
import InputPrimary from '../../components/input/InputPrimary';
import TitleSection from '../../components/title/TitleSection';
import TemplateAuth from './TemplateAuth';


const SignUp = () => {
  return (
    <TemplateAuth>
    <BoxSignIn>
      <TitleSection>Đăng kí</TitleSection>
      <div className="box-input">
        <div className="user">
          <InputPrimary placeholder='Tài khoản'/>
        </div>
        <div className="password" >
          <InputPrimary placeholder='Mật khẩu'/>
        </div>
      </div>
      <div className="note">
          Bạn chưa có tải khoản? <Link to='/auth/signup'>Đăng kí</Link>
      </div>
      <label className="note-second">
          <input type="checkbox" />
          <span> Đồng ý với điều khoản</span>
      </label>
      <div className="button">
      <Button>Đăng nhập</Button>
      </div>
    </BoxSignIn>
  </TemplateAuth>
  )
}
const BoxSignIn = styled.div`


`

export default SignUp