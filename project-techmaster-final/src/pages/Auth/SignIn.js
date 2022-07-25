import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/button/Button";
import InputPrimary from "../../components/input/InputPrimary";
import TitleSection from "../../components/title/TitleSection";
import TemplateAuth from "./TemplateAuth";

const SignIn = () => {
  const [togglepassword, settogglepassword] = useState(false)
  const result = useLocation().pathname.includes("/auth");
  return (
    <>
      {
        <TemplateAuth>
          <BoxSignIn>
            <TitleSection>Đăng nhập</TitleSection>
            <div className="box-input">
              <div className="user">
                <InputPrimary placeholder='Tài khoản' />
              </div>
              <div className="password" >
                <InputPrimary placeholder='Mật khẩu' type={togglepassword ? 'text' : 'password'}>
                  {togglepassword ? <Icon icon='codicon:eye-closed' className="input-icon"
                    onClick={() => settogglepassword(!togglepassword)}
                  ></Icon>
                    :
                    <Icon icon='codicon:eye' className="input-icon"
                      onClick={() => settogglepassword(!togglepassword)}
                    ></Icon>}
                </InputPrimary>
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
              <Button type="submit" disabled={true} isLoading={false}>Đăng nhập</Button>
            </div>
          </BoxSignIn>
        </TemplateAuth>
      }
    </>
  );
};
export const BoxSignIn = styled.div`
    max-width: 50%;
    width: 100%;
  .box-input {
        width: 100%;
        margin-top: 60px;
    .user, .password, .email{
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
