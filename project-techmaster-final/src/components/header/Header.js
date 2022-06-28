import React from "react";
import styled from "styled-components";
import Input from "../input/Input";
import BtnHeader from "./BtnHeader";
import LogoHeader from "./LogoHeader";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <StyledHeader>

      <div className="left">
        <LogoHeader></LogoHeader>
        <Navbar></Navbar>
        <div className="box-search"><Input placeholder='Tìm Coin'></Input></div>
      </div>
      <BtnHeader themeToggler={props.themeToggler} />
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
  background: ${({ theme }) => theme.bg};
  height: 64px;
  width: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }
  .box-search{
    max-width: 184px;
  }
`;

export default Header;
