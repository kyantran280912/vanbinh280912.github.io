import { Icon } from "@iconify/react";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav>
      <ul className="menu">
        <li className="menu-items">
          <Icon icon="fluent:app-folder-20-filled" className="app-icon"></Icon>
          <Icon icon="ant-design:caret-down-filled"></Icon>
        </li>
        <li className="menu-items">
          Mua Crypto
          <Icon icon="ant-design:caret-down-filled"></Icon>
        </li>
        <li className="menu-items">
          Thị trường
          <Icon icon="ant-design:caret-down-filled"></Icon>
        </li>
        <li className="menu-items">
          Giao dịch
          <Icon icon="ant-design:caret-down-filled"></Icon>
        </li>
        <li className="menu-items">
         Phái sinh
          <Icon icon="ant-design:caret-down-filled"></Icon>
        </li>
        <li className="menu-items">
         Earn
          <Icon icon="ant-design:caret-down-filled"></Icon>
        </li>
        <li className="menu-items">
         NFT
        </li>
        <li className="menu-items">
         WSOT
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.div`
  .menu {
    display: flex;
    align-items: center;
    .menu-items {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0 12px;
      font-size: 14px;
      line-height: 64px;
      gap: 0 4px;
      svg {
        color: ${({ theme }) => theme.text};
        font-size: 12px;
      }
      .app-icon{
        font-size: 26px;
      }
    }
  }
`;

export default Navbar;
