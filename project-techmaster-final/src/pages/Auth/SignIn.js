import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/button/Button";
import InputPrimary from "../../components/input/InputPrimary";
import Input from "../../components/input/InputSearch";
import TitleSection from "../../components/title/TitleSection";
import TemplateAuth from "./TemplateAuth";

const SignIn = () => {
  const result = useLocation().pathname.includes("/auth");
  return (
    <TemplateAuth>
      <BoxSignIn>
        <TitleSection>Đăng nhập</TitleSection>
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
  );
};
const BoxSignIn = styled.div`
    max-width: 50%;
    width: 100%;
  .box-input {
        width: 100%;
        margin-top: 60px;
    .user, .password{
        height: 60px;
        margin-bottom: 24px;
    }

  }
  .note{
    margin-bottom: 80px;
  }
  .button{
    height: 50px;
    margin-top: 24px;
  }
`;

export default SignIn;
