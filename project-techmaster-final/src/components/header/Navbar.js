import { Icon } from "@iconify/react";
import React from "react";
import styled from "styled-components";
import DropdownApp from "./DropdownApp";

const Navbar = () => {
  return (
    <StyledNav>
      <ul className="menu">
        <li className="menu-items" style={{height: 64}} >
          <Icon icon="fluent:app-folder-20-filled" className="app-icon"></Icon>
          <Icon icon="ant-design:caret-down-filled" className="dropdown-icon"></Icon>
          <div className="box-dropdown">
          <DropdownApp/>
          </div>
        </li>
        <li className="menu-items">
          Mua Crypto
          <Icon icon="ant-design:caret-down-filled" className="dropdown-icon"></Icon>
        </li>
        <li className="menu-items">
          Thị trường
          <Icon icon="ant-design:caret-down-filled" className="dropdown-icon"></Icon>
        </li>
        <li className="menu-items">
          Giao dịch
          <Icon icon="ant-design:caret-down-filled" className="dropdown-icon"></Icon>
        </li>
        <li className="menu-items">
         Phái sinh
          <Icon icon="ant-design:caret-down-filled" className="dropdown-icon"></Icon>
        </li>
        <li className="menu-items">
         Earn
          <Icon icon="ant-design:caret-down-filled" className="dropdown-icon"></Icon>
        </li>
        <li className="menu-items">
         NFT
        </li>
        <li className="menu-items">
         WSOT
         <img src="https://bin.bnbstatic.com/image/julia/new-hompage/web-background-image.png" alt="" />
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.div`
  .menu {
    display: flex;
    align-items: center;
    height: 100%;
    .menu-items {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0 12px;
      font-size: 14px;
      line-height: 64px;
      gap: 0 4px;
      position: relative;
      .dropdown-icon {
        color: ${({ theme }) => theme.text};
        font-size: 12px;
        transition: .2s ;
      }
      .app-icon{
        font-size: 26px;
      }
      .box-dropdown{
        display: none;
      }
      :hover{
        color: ${({ theme }) => theme.pri};
        .dropdown-icon{
          color: ${({ theme }) => theme.pri};
          transform: rotate(180deg);
        }
        .box-dropdown{
          display: block;
        }
        .app-icon{
          transform: rotate(0);
        }
      }
      .box-dropdown{
        position: absolute;
        top: 100%;
      }
    }
    
  }
`;

export default Navbar;
