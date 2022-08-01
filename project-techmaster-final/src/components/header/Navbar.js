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
        <li className="menu-items active">
          Home
        </li>
        <li className="menu-items">
          Market
        </li>
        <li className="menu-items">
          Converter
        </li>
        <li className="menu-items">
         Buy Crypto
        </li>
        <li className="menu-items">
         About
        </li>
        <li className="menu-items">
         Contact
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
      font-weight: 600;
      font-size: 16px;
      line-height: 36px;
      gap: 0 4px;
      position: relative;
      transition: .3s ease;
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
        color: ${({ theme }) => theme.textpri};
        .dropdown-icon{
          color: ${({ theme }) => theme.textpri};
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
        z-index: 9999;
      }
    }
    .menu-items.active{
    }
  }
`;

export default Navbar;
