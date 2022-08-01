import React from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { useScroll } from "../../utils/scroll";
import BtnHeader from "./BtnHeader";
import LogoHeader from "./LogoHeader";
import Navbar from "./Navbar";
const Header = (props) => {
  const result = useLocation().pathname.includes('/auth')
  const { showhide } = useScroll()
  console.log(window.scrollY);
  return (
    <>
      {
        !result && <StyledHeader  showhide={showhide}>
          <div className="left">
            <LogoHeader></LogoHeader>
            {/* <div className="box-search" style={{ display: 'none'}}><Input placeholder='Tìm Coin'></Input></div> */}
          </div>
          <Navbar></Navbar>
          <BtnHeader themeToggler={props.themeToggler} />
        </StyledHeader>
      }
    </>
  );
};
const StyledHeader = styled.div`
  position: fixed;
  height: 64px;
  background: transparent;
  width: 100%;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  transition: .2s ease-in;
  .left {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }
  .box-search{
    max-width: 184px;
  }
  ${props => props.showhide && css`
  background: ${({ theme }) => theme.bg};
  top: 0;
  `};
  ${props => !props.showhide && css`
      background: transparent;
      top: 60px;
  `};
`;
export default Header;
